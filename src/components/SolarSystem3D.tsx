import { useRef, useState, useMemo } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { planets as planetsData } from "@/data/planets";
import PlanetLabel from "./PlanetLabel";

// Import textures
import sunTexture from "@/assets/textures/sun.jpg";
import mercuryTexture from "@/assets/textures/mercury.jpg";
import venusTexture from "@/assets/textures/venus.jpg";
import earthTexture from "@/assets/textures/earth.jpg";
import marsTexture from "@/assets/textures/mars.jpg";
import jupiterTexture from "@/assets/textures/jupiter.jpg";
import saturnTexture from "@/assets/textures/saturn.jpg";
import uranusTexture from "@/assets/textures/uranus.jpg";
import neptuneTexture from "@/assets/textures/neptune.jpg";
import saturnRingsTexture from "@/assets/textures/saturn-rings.png";

const textureMap: Record<string, string> = {
  mercury: mercuryTexture,
  venus: venusTexture,
  earth: earthTexture,
  mars: marsTexture,
  jupiter: jupiterTexture,
  saturn: saturnTexture,
  uranus: uranusTexture,
  neptune: neptuneTexture,
};

interface SolarSystem3DProps {
  speed: number;
  isPaused: boolean;
  focusedPlanet: string | null;
  showLabels: boolean;
}

// Enhanced Sun component with texture
const Sun = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, sunTexture);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={sunRef} position={[0, 0, 0]} castShadow>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        emissive="#FDB813"
        emissiveIntensity={1.5}
        emissiveMap={texture}
      />
      <pointLight intensity={3} distance={200} decay={1.5} castShadow />
    </mesh>
  );
};

// Enhanced Planet component with textures and rotation
const Planet = ({
  id,
  name,
  color,
  size,
  orbitRadius,
  orbitSpeed,
  speed,
  isPaused,
  showLabel,
  texture,
}: {
  id: string;
  name: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  speed: number;
  isPaused: boolean;
  showLabel: boolean;
  texture: THREE.Texture;
}) => {
  const planetGroupRef = useRef<THREE.Group>(null);
  const planetMeshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!isPaused && planetGroupRef.current) {
      const t = clock.getElapsedTime() * orbitSpeed * speed * 0.1;
      planetGroupRef.current.rotation.y = t;
    }
    if (planetMeshRef.current) {
      // Axial rotation
      planetMeshRef.current.rotation.y += 0.005 * (isPaused ? 0 : speed);
    }
  });

  return (
    <group ref={planetGroupRef}>
      {/* Orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.05, orbitRadius + 0.05, 128]} />
        <meshBasicMaterial
          color="#ffffff"
          opacity={0.15}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Planet */}
      <group position={[orbitRadius, 0, 0]}>
        <mesh
          ref={planetMeshRef}
          castShadow
          receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.1 : 1}
        >
          <sphereGeometry args={[size * 0.5, 64, 64]} />
          <meshStandardMaterial
            map={texture}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        <PlanetLabel name={name} visible={showLabel || hovered} />
        
        {/* Saturn's rings */}
        {id === "saturn" && <SaturnRings size={size} />}
      </group>
    </group>
  );
};

// Saturn's rings component
const SaturnRings = ({ size }: { size: number }) => {
  const ringsTexture = useLoader(THREE.TextureLoader, saturnRingsTexture);
  
  return (
    <mesh rotation={[Math.PI / 2.5, 0, 0]} receiveShadow>
      <ringGeometry args={[size * 0.6, size * 1.2, 64]} />
      <meshStandardMaterial
        map={ringsTexture}
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
        metalness={0.2}
        roughness={0.8}
      />
    </mesh>
  );
};

// Main 3D Scene
const SolarSystem3D = ({ speed, isPaused, focusedPlanet, showLabels }: SolarSystem3DProps) => {
  const { camera } = useThree();
  const controlsRef = useRef<any>();

  // Load all planet textures
  const planetTextures = useMemo(() => {
    return planetsData.reduce((acc, planet) => {
      acc[planet.id] = textureMap[planet.id];
      return acc;
    }, {} as Record<string, string>);
  }, []);

  const textures = useLoader(
    THREE.TextureLoader,
    Object.values(planetTextures)
  ) as THREE.Texture[];

  const texturesByPlanet = useMemo(() => {
    return planetsData.reduce((acc, planet, index) => {
      acc[planet.id] = textures[index];
      return acc;
    }, {} as Record<string, THREE.Texture>);
  }, [textures]);

  // Focus on planet when selected
  useFrame(() => {
    if (focusedPlanet && controlsRef.current) {
      const planet = planetsData.find((p) => p.id === focusedPlanet);
      if (planet) {
        const targetX = planet.orbitRadius * 1.5;
        camera.position.lerp(
          new THREE.Vector3(targetX, planet.orbitRadius * 0.5, targetX),
          0.05
        );
        controlsRef.current.target.lerp(
          new THREE.Vector3(planet.orbitRadius, 0, 0),
          0.05
        );
      }
    }
  });

  return (
    <>
      <color attach="background" args={["#050510"]} />
      
      {/* Enhanced lighting */}
      <ambientLight intensity={0.15} />
      <Stars radius={300} depth={60} count={8000} factor={8} saturation={0} />
      
      <Sun />
      
      {planetsData.map((planet) => (
        <Planet
          key={planet.id}
          id={planet.id}
          name={planet.name}
          color={planet.color}
          size={planet.size}
          orbitRadius={planet.orbitRadius}
          orbitSpeed={planet.orbitSpeed}
          speed={speed}
          isPaused={isPaused}
          showLabel={showLabels}
          texture={texturesByPlanet[planet.id]}
        />
      ))}

      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        minDistance={5}
        maxDistance={120}
      />
    </>
  );
};

export default SolarSystem3D;
