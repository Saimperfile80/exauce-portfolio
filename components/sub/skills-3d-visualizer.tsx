"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

interface SkillNode {
  name: string;
  category: string;
  color: string;
  position: [number, number, number];
}

const SKILL_NODES: SkillNode[] = [
  { name: "Python / AI", category: "AI & Backend", color: "#a855f7", position: [2.2, 0.8, 0.5] },
  { name: "React 19", category: "Frontend", color: "#06b6d4", position: [-2.1, 1.2, 0.8] },
  { name: "FastAPI", category: "Backend", color: "#14b8a6", position: [1.6, -1.5, 1.2] },
  { name: "Laravel", category: "Backend", color: "#f43f5e", position: [-1.8, -1.2, 1.4] },
  { name: "Symfony", category: "Backend", color: "#8b5cf6", position: [0.3, 2.3, -0.6] },
  { name: "C# / .NET", category: "Desktop", color: "#3b82f6", position: [-1.4, 0.2, -2.1] },
  { name: "Flutter & Dart", category: "Mobile", color: "#38bdf8", position: [1.8, 1.6, -1.1] },
  { name: "Qwen / Local LLM", category: "AI Core", color: "#c084fc", position: [0.2, -2.2, -0.8] },
  { name: "Whisper & MCP", category: "Voice AI", color: "#2dd4bf", position: [-0.6, 2.0, 1.2] },
  { name: "Supabase & SQL", category: "Databases", color: "#10b981", position: [2.0, -0.4, -1.8] },
  { name: "Ruby on Rails", category: "Backend", color: "#e11d48", position: [-2.3, -0.5, -1.2] },
  { name: "TypeScript", category: "Languages", color: "#60a5fa", position: [0.0, 0.0, 2.4] },
  { name: "Electron & WPF", category: "Desktop", color: "#a78bfa", position: [-1.2, -1.9, -1.0] },
  { name: "Tailwind CSS", category: "Frontend", color: "#38bdf8", position: [1.2, 1.9, 1.1] },
];

function ConstellationGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08;
    }
  });

  // Generate glowing connection lines between nearby nodes
  const linesGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < SKILL_NODES.length; i++) {
      for (let j = i + 1; j < SKILL_NODES.length; j++) {
        const p1 = new THREE.Vector3(...SKILL_NODES[i].position);
        const p2 = new THREE.Vector3(...SKILL_NODES[j].position);
        if (p1.distanceTo(p2) < 3.2) {
          points.push(p1, p2);
        }
      }
    }
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Central Core Glow */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial color="#7042f8" transparent opacity={0.25} wireframe />
      </mesh>

      {/* Orbital Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} />
      </mesh>

      {/* Connection Lines */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#7042f8" transparent opacity={0.35} />
      </lineSegments>

      {/* Interactive Floating Nodes */}
      {SKILL_NODES.map((node) => (
        <Float key={node.name} speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={node.position}>
            {/* Glowing Sphere Node */}
            <mesh>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={1.8}
                roughness={0.2}
              />
            </mesh>

            {/* Floating HTML Badge */}
            <Html
              distanceFactor={8}
              center
              position={[0, 0.28, 0]}
              className="pointer-events-none select-none"
            >
              <div
                style={{ borderColor: `${node.color}60` }}
                className="px-2.5 py-1 rounded-full bg-[#030014]/90 backdrop-blur-md border text-[10px] font-mono font-bold whitespace-nowrap shadow-lg flex items-center gap-1.5"
              >
                <span
                  style={{ backgroundColor: node.color }}
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                />
                <span className="text-white">{node.name}</span>
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  );
}

export const Skills3DVisualizer = () => {
  return (
    <div className="w-full h-[420px] sm:h-[500px] relative rounded-3xl border border-purple-500/30 bg-[#030014]/80 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-purple-950/40 my-8">
      {/* Header Overlay */}
      <div className="absolute top-4 left-6 z-10 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            3D Interactive Skill Constellation
          </h4>
        </div>
        <p className="text-[11px] text-gray-400 font-mono mt-0.5">
          Drag / rotate the 3D globe to inspect architectural domains and core technologies
        </p>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 45 }}
        className="cursor-grab active:cursor-grabbing w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <ConstellationGlobe />
        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          rotateSpeed={0.6}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Footer Helper Badge */}
      <div className="absolute bottom-4 right-6 z-10 pointer-events-none">
        <span className="text-[10px] font-mono px-3 py-1 rounded-full border border-purple-500/40 bg-purple-950/70 text-purple-300 backdrop-blur-md">
          Three.js / WebGL Spatial Matrix
        </span>
      </div>
    </div>
  );
};

