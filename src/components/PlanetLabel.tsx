import { Html } from "@react-three/drei";
import { Badge } from "@/components/ui/badge";

interface PlanetLabelProps {
  name: string;
  visible: boolean;
}

const PlanetLabel = ({ name, visible }: PlanetLabelProps) => {
  if (!visible) return null;

  return (
    <Html
      center
      distanceFactor={10}
      style={{
        transition: "all 0.2s",
        opacity: visible ? 1 : 0,
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <Badge className="glass-card font-heading whitespace-nowrap pointer-events-none">
        {name}
      </Badge>
    </Html>
  );
};

export default PlanetLabel;
