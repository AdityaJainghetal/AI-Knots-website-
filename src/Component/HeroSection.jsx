import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  MeshDistortMaterial,
  Sphere,
  Box,
  Environment,
  PerspectiveCamera,
  Stars,
  Trail,
  Torus,
  Cone,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Code2, Rocket } from "lucide-react";
import * as THREE from "three";

// ────────────────────────────────────────────────
// 3D Components for Hero
// ────────────────────────────────────────────────

// Floating Tech Orbs
const TechOrb = ({ position, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.5;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[0.8, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
};

// Rotating Tech Ring
const TechRing = ({ position, radius = 2 }) => {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[radius, 0.08, 16, 100]} />
      <meshStandardMaterial
        color="#dc2626"
        metalness={0.9}
        roughness={0.1}
        emissive="#dc2626"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

// Glowing Particles Cloud
const ParticleCloud = () => {
  const particlesRef = useRef();
  const count = 300;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i * 3] = 0.86;
      colors[i * 3 + 1] = 0.15;
      colors[i * 3 + 2] = 0.15;
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 0.94;
      colors[i * 3 + 1] = 0.27;
      colors[i * 3 + 2] = 0.27;
    } else {
      colors[i * 3] = 0.97;
      colors[i * 3 + 1] = 0.45;
      colors[i * 3 + 2] = 0.45;
    }
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

// Central Pulsating Cube
const PulsatingCube = () => {
  const cubeRef = useRef();

  useFrame((state) => {
    if (cubeRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.15;
      cubeRef.current.scale.set(scale, scale, scale);
      cubeRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      cubeRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#dc2626"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
};

// Orbiting Mini Cubes
const OrbitingCubes = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  const cubes = [];
  const radius = 4;
  const count = 12;

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    cubes.push(
      <Box key={i} position={[x, 0, z]} args={[0.2, 0.2, 0.2]}>
        <meshStandardMaterial
          color={i % 2 === 0 ? "#dc2626" : "#ef4444"}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>,
    );
  }

  return <group ref={groupRef}>{cubes}</group>;
};

// Floating Cones
const FloatingCone = ({ position, color }) => {
  const coneRef = useRef();

  useFrame((state) => {
    if (coneRef.current) {
      coneRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      coneRef.current.position.y =
        position[1] + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Cone ref={coneRef} args={[0.4, 1, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.3}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Cone>
    </Float>
  );
};

// DNA Helix Structure
const DNAHelix = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const spheres = [];
  const height = 6;
  const count = 30;
  const radius = 1.5;

  for (let i = 0; i < count; i++) {
    const t = (i / count) * height - height / 2;
    const angle = (i / count) * Math.PI * 8;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    spheres.push(
      <Sphere key={i} args={[0.1, 16, 16]} position={[x, t, z]}>
        <meshStandardMaterial
          color={i % 2 === 0 ? "#dc2626" : "#ef4444"}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>,
    );
  }

  return <group ref={groupRef}>{spheres}</group>;
};

// Main Hero 3D Scene
const HeroScene3D = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#dc2626" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ef4444" />
      <spotLight
        position={[0, 8, 0]}
        angle={0.5}
        penumbra={1}
        intensity={1.5}
        color="#f87171"
        castShadow
      />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />

      {/* 3D Elements */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ParticleCloud />
      <PulsatingCube />
      <OrbitingCubes />
      <DNAHelix />

      {/* Tech Orbs */}
      <TechOrb position={[-3, 2, -2]} color="#dc2626" speed={1} />
      <TechOrb position={[3, -2, -1]} color="#ef4444" speed={1.2} />
      <TechOrb position={[0, 3, 1]} color="#f87171" speed={0.8} />
      <TechOrb position={[-4, -1, 2]} color="#fca5a5" speed={1.5} />

      {/* Tech Rings */}
      <TechRing position={[0, 0, 0]} radius={3} />
      <TechRing position={[0, 0, 0]} radius={2} />

      {/* Floating Cones */}
      <FloatingCone position={[-5, 2, -3]} color="#dc2626" />
      <FloatingCone position={[5, -2, -2]} color="#ef4444" />
      <FloatingCone position={[2, 3, 1]} color="#f87171" />

      {/* Environment */}
      <Environment preset="night" />
    </>
  );
};

// ────────────────────────────────────────────────
// Main Hero Section Component
// ────────────────────────────────────────────────

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows>
          <Suspense fallback={null}>
            <HeroScene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-red-950/40 backdrop-blur-xl border border-red-600/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-red-400" />
            <span className="text-red-300 font-semibold">
              Next-Gen Technology Solutions
            </span>
            <Sparkles className="w-5 h-5 text-red-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-6"
          >
            <span className="block text-white">AI Knots</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 animate-gradient">
              TECH EXCELLENCE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Transforming businesses through{" "}
            <span className="text-red-400 font-semibold">
              innovative IT solutions
            </span>
            , cutting-edge development, and 24/7 expert support.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { icon: Code2, text: "Custom Development" },
              { icon: Zap, text: "Lightning Fast" },
              { icon: Rocket, text: "Scalable Solutions" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-red-900/30 rounded-full px-6 py-3"
              >
                <item.icon className="w-5 h-5 text-red-500" />
                <span className="text-gray-200 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 20px 60px rgba(220, 38, 38, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-xl font-bold shadow-2xl shadow-red-900/50 transition-all duration-300 flex items-center gap-3"
            >
              Get Started Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-red-600/60 rounded-full text-red-400 hover:bg-red-950/40 transition-all duration-300 text-xl font-semibold flex items-center gap-3 backdrop-blur-sm"
            >
              Explore Solutions
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { num: "500+", label: "Projects" },
              { num: "50+", label: "Clients" },
              { num: "24/7", label: "Support" },
              { num: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl border border-red-900/30 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-red-500 mb-2">
                  {stat.num}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-red-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
