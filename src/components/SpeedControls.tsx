import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SpeedControlsProps {
  speed: number;
  isPaused: boolean;
  onSpeedChange: (speed: number) => void;
  onTogglePause: () => void;
  onReset: () => void;
}

const SpeedControls = ({
  speed,
  isPaused,
  onSpeedChange,
  onTogglePause,
  onReset,
}: SpeedControlsProps) => {
  return (
    <Card className="glass-card p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-semibold">Orbit Speed</h3>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={onTogglePause}
              className="font-heading"
            >
              {isPaused ? (
                <>
                  <Play className="h-4 w-4 mr-1" />
                  Play
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4 mr-1" />
                  Pause
                </>
              )}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={onReset}
              className="font-heading"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Slider
            value={[speed]}
            onValueChange={(value) => onSpeedChange(value[0])}
            min={0}
            max={5}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Slower</span>
            <span className="font-heading font-semibold">{speed.toFixed(1)}x</span>
            <span>Faster</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SpeedControls;
