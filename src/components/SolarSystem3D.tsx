import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { planets } from "@/data/planets";

// Sun component
const Sun = () => {
  const sunRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        emissive="#FDB813"
        emissiveIntensity={2}
        color="#FDB813"
      />
      <pointLight intensity={2} distance={100} decay={2} />
    </mesh>
  );
};

// Planet component
const Planet = ({
  color,
  size,
  orbitRadius,
  orbitSpeed,
  name,
}: {
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  name: string;
}) => {
  const planetRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const t = clock.getElapsedTime() * orbitSpeed * 0.1;
      planetRef.current.rotation.y = t;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={planetRef}>
      {/* Orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.05, orbitRadius + 0.05, 64]} />
        <meshBasicMaterial color="#ffffff" opacity={0.1} transparent side={THREE.DoubleSide} />
      </mesh>

      {/* Planet */}
      <mesh ref={meshRef} position={[orbitRadius, 0, 0]}>
        <sphereGeometry args={[size * 0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
};

// Main 3D Scene
const SolarSystem3D = () => {
  return (
    <>
      <color attach="background" args={["#050510"]} />
      <ambientLight intensity={0.2} />
      <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} />
      
      <Sun />
      
      {planets.map((planet) => (
        <Planet
          key={planet.id}
          color={planet.color}
          size={planet.size}
          orbitRadius={planet.orbitRadius}
          orbitSpeed={planet.orbitSpeed}
          name={planet.name}
        />
      ))}

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        minDistance={10}
        maxDistance={100}
      />
    </>
  );
};

export default SolarSystem3D;
