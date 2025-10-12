import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Rocket className="h-6 w-6 text-primary group-hover:glow-blue transition-all" />
            <span className="font-heading text-xl font-bold text-gradient">
              Solar System Explorer
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              asChild
              className="font-heading"
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant={isActive("/planets") ? "default" : "ghost"}
              asChild
              className="font-heading"
            >
              <Link to="/planets">Planets Info</Link>
            </Button>
            <Button
              variant={isActive("/solar-system") ? "default" : "ghost"}
              asChild
              className="font-heading"
            >
              <Link to="/solar-system">3D Viewer</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
