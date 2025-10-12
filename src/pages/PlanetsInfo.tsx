import { useState } from "react";
import Navigation from "@/components/Navigation";
import { planets } from "@/data/planets";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlanetsInfo = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[2]); // Default to Earth

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Planetary Information
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover detailed information about each planet in our solar system
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Planet Selection Cards */}
          <div className="lg:col-span-1 space-y-4">
            {planets.map((planet, index) => (
              <Card
                key={planet.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedPlanet.id === planet.id
                    ? "ring-2 ring-primary glow-blue"
                    : "glass-card"
                }`}
                onClick={() => setSelectedPlanet(planet)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: planet.color }}
                      />
                      {planet.name}
                    </CardTitle>
                    {planet.moons > 0 && (
                      <Badge variant="secondary" className="font-heading">
                        {planet.moons} {planet.moons === 1 ? "Moon" : "Moons"}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Detailed Planet Information */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full glow-blue"
                    style={{ backgroundColor: selectedPlanet.color }}
                  />
                  <div>
                    <CardTitle className="font-heading text-3xl">
                      {selectedPlanet.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {selectedPlanet.distanceFromSun} from the Sun
                    </CardDescription>
                  </div>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  {selectedPlanet.description}
                </p>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="physical" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="physical" className="font-heading">
                      Physical
                    </TabsTrigger>
                    <TabsTrigger value="orbital" className="font-heading">
                      Orbital
                    </TabsTrigger>
                    <TabsTrigger value="atmosphere" className="font-heading">
                      Atmosphere
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="physical" className="space-y-4 mt-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Diameter</div>
                        <div className="font-heading text-lg text-primary">
                          {selectedPlanet.diameter}
                        </div>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Mass</div>
                        <div className="font-heading text-lg text-primary">
                          {selectedPlanet.mass}
                        </div>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Temperature</div>
                        <div className="font-heading text-lg text-accent">
                          {selectedPlanet.temperature}
                        </div>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Moons</div>
                        <div className="font-heading text-lg text-secondary">
                          {selectedPlanet.moons}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="orbital" className="space-y-4 mt-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">
                          Distance from Sun
                        </div>
                        <div className="font-heading text-lg text-primary">
                          {selectedPlanet.distanceFromSun}
                        </div>
                      </div>
                      <div className="glass-card p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">
                          Orbital Period
                        </div>
                        <div className="font-heading text-lg text-secondary">
                          {selectedPlanet.orbitalPeriod}
                        </div>
                      </div>
                      <div className="glass-card p-4 rounded-lg sm:col-span-2">
                        <div className="text-sm text-muted-foreground mb-1">
                          Rotation Period
                        </div>
                        <div className="font-heading text-lg text-accent">
                          {selectedPlanet.rotationPeriod}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="atmosphere" className="space-y-4 mt-4">
                    <div className="glass-card p-6 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-2">
                        Atmospheric Composition
                      </div>
                      <div className="font-heading text-lg text-foreground leading-relaxed">
                        {selectedPlanet.atmosphere}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlanetsInfo;
