import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { planets } from "@/data/planets";

interface CameraPresetsProps {
  onSelectPlanet: (planetId: string) => void;
  onResetView: () => void;
}

const CameraPresets = ({ onSelectPlanet, onResetView }: CameraPresetsProps) => {
  return (
    <Card className="glass-card p-4">
      <h3 className="font-heading font-semibold mb-3">Quick Views</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={onResetView}
          className="font-heading"
        >
          Full View
        </Button>
        {planets.map((planet) => (
          <Button
            key={planet.id}
            size="sm"
            variant="outline"
            onClick={() => onSelectPlanet(planet.id)}
            className="font-heading"
            style={{
              borderColor: planet.color,
            }}
          >
            {planet.name}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default CameraPresets;
