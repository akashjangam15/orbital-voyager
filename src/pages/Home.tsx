import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Telescope, Info, Orbit } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gradient animate-float">
            Explore Our Solar System
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Journey through space and discover the wonders of our cosmic neighborhood. 
            Experience interactive 3D planetary motion and learn fascinating facts about each celestial body.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="font-heading glow-blue">
              <Link to="/planets">
                <Info className="mr-2 h-5 w-5" />
                Learn About Planets
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-heading glow-purple">
              <Link to="/solar-system">
                <Orbit className="mr-2 h-5 w-5" />
                View 3D Solar System
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-6 rounded-lg hover:glow-blue transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 glow-blue">
              <Info className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">Planet Information</h3>
            <p className="text-muted-foreground">
              Detailed facts about each planet including size, composition, atmosphere, and unique characteristics.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg hover:glow-purple transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 glow-purple">
              <Orbit className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">3D Visualization</h3>
            <p className="text-muted-foreground">
              Interactive 3D model showing planetary orbits and real-time motion around the Sun.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg hover:glow-orange transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 glow-orange">
              <Telescope className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">Interactive Controls</h3>
            <p className="text-muted-foreground">
              Zoom, rotate, and explore the solar system from any angle with intuitive controls.
            </p>
          </div>
        </div>

        {/* Solar System Stats */}
        <div className="mt-16 glass-card p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-6 text-center text-gradient">
            Solar System Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">Planets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">200+</div>
              <div className="text-muted-foreground">Moons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">4.6B</div>
              <div className="text-muted-foreground">Years Old</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Asteroids</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
