import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Navigation from "@/components/Navigation";
import SolarSystem3D from "@/components/SolarSystem3D";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const SolarSystemViewer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 text-gradient">
            3D Solar System Visualization
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive 3D model showing planetary orbits in real-time
          </p>
        </div>

        <Card className="glass-card p-0 overflow-hidden">
          <div className="h-[70vh] relative">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
              }
            >
              <Canvas camera={{ position: [0, 20, 40], fov: 60 }}>
                <SolarSystem3D />
              </Canvas>
            </Suspense>
          </div>
        </Card>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card className="glass-card p-4">
            <h3 className="font-heading text-lg font-bold mb-2 text-primary">
              🖱️ Rotate
            </h3>
            <p className="text-sm text-muted-foreground">
              Click and drag to rotate the view around the solar system
            </p>
          </Card>
          <Card className="glass-card p-4">
            <h3 className="font-heading text-lg font-bold mb-2 text-secondary">
              🔍 Zoom
            </h3>
            <p className="text-sm text-muted-foreground">
              Use mouse wheel or pinch gesture to zoom in and out
            </p>
          </Card>
          <Card className="glass-card p-4">
            <h3 className="font-heading text-lg font-bold mb-2 text-accent">
              ↔️ Pan
            </h3>
            <p className="text-sm text-muted-foreground">
              Right-click and drag to pan the camera position
            </p>
          </Card>
        </div>

        <div className="mt-8 glass-card p-6 rounded-lg">
          <h2 className="font-heading text-2xl font-bold mb-4 text-gradient">
            About This Visualization
          </h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              This interactive 3D model shows all eight planets of our solar system orbiting the Sun.
              The orbital speeds and planet sizes are scaled for visual clarity and are not to exact scale.
            </p>
            <p>
              Each planet follows its own orbital path, with Mercury moving fastest and Neptune slowest,
              just like in our real solar system. The thin rings show each planet's orbital path.
            </p>
            <p>
              Use the interactive controls to explore from any angle and discover the beauty of our
              cosmic neighborhood in motion!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolarSystemViewer;
