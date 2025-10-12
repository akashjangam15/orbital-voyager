import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Navigation from "@/components/Navigation";
import SolarSystem3D from "@/components/SolarSystem3D";
import SpeedControls from "@/components/SpeedControls";
import CameraPresets from "@/components/CameraPresets";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const SolarSystemViewer = () => {
  const [speed, setSpeed] = useState(1.0);
  const [isPaused, setIsPaused] = useState(false);
  const [focusedPlanet, setFocusedPlanet] = useState<string | null>(null);
  const [showLabels, setShowLabels] = useState(true);

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
    toast(isPaused ? "Simulation resumed" : "Simulation paused");
  };

  const handleReset = () => {
    setSpeed(1.0);
    setIsPaused(false);
    setFocusedPlanet(null);
    toast("Settings reset to default");
  };

  const handleSelectPlanet = (planetId: string) => {
    setFocusedPlanet(planetId);
    toast(`Focusing on ${planetId.charAt(0).toUpperCase() + planetId.slice(1)}`);
  };

  const handleResetView = () => {
    setFocusedPlanet(null);
    toast("View reset to full solar system");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-gradient">
            3D Solar System Visualization
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Realistic interactive 3D model with textured planets and dynamic controls
          </p>
        </div>

        {/* Main 3D Viewer */}
        <Card className="glass-card p-0 overflow-hidden mb-6">
          <div className="h-[70vh] relative">
            <Suspense
              fallback={
                <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="text-muted-foreground font-heading">Loading solar system...</p>
                </div>
              }
            >
              <Canvas 
                camera={{ position: [0, 20, 40], fov: 60 }}
                shadows
              >
                <SolarSystem3D
                  speed={speed}
                  isPaused={isPaused}
                  focusedPlanet={focusedPlanet}
                  showLabels={showLabels}
                />
              </Canvas>
            </Suspense>
          </div>
        </Card>

        {/* Controls Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <SpeedControls
            speed={speed}
            isPaused={isPaused}
            onSpeedChange={handleSpeedChange}
            onTogglePause={handleTogglePause}
            onReset={handleReset}
          />

          <Card className="glass-card p-4">
            <h3 className="font-heading font-semibold mb-3">Display Options</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="show-labels" className="font-heading">
                Show Planet Labels
              </Label>
              <Switch
                id="show-labels"
                checked={showLabels}
                onCheckedChange={setShowLabels}
              />
            </div>
          </Card>
        </div>

        {/* Camera Presets */}
        <CameraPresets
          onSelectPlanet={handleSelectPlanet}
          onResetView={handleResetView}
        />

        {/* Features Grid */}
        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <Card className="glass-card p-4">
            <h3 className="font-heading text-lg font-bold mb-2 text-primary">
              🎨 Realistic Textures
            </h3>
            <p className="text-sm text-muted-foreground">
              High-quality surface textures for each planet
            </p>
          </Card>
          <Card className="glass-card p-4">
            <h3 className="font-heading text-lg font-bold mb-2 text-secondary">
              💍 Saturn's Rings
            </h3>
            <p className="text-sm text-muted-foreground">
              Beautiful detailed ring system with transparency
            </p>
          </Card>
          <Card className="glass-card p-4">
            <h3 className="font-heading text-lg font-bold mb-2 text-accent">
              🔄 Planet Rotation
            </h3>
            <p className="text-sm text-muted-foreground">
              Planets rotate on their own axes as they orbit
            </p>
          </Card>
          <Card className="glass-card p-4">
            <h3 className="font-heading text-lg font-bold mb-2 text-primary">
              🎮 Full Control
            </h3>
            <p className="text-sm text-muted-foreground">
              Adjust speed, pause, and focus on any planet
            </p>
          </Card>
        </div>

        {/* Info Section */}
        <div className="mt-8 glass-card p-6 rounded-lg">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gradient">
            Enhanced Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Realistic Rendering
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>High-resolution planet surface textures</li>
                <li>Advanced lighting with realistic shadows</li>
                <li>Saturn's iconic ring system</li>
                <li>Accurate planet colors and atmospheres</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Interactive Controls
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Adjustable orbital speed (0-5x)</li>
                <li>Pause/resume planetary motion</li>
                <li>Quick camera presets for each planet</li>
                <li>Toggle planet name labels on/off</li>
                <li>Hover over planets to see their names</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolarSystemViewer;
