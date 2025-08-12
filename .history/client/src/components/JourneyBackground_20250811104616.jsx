import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedParticles({ count = 1000 }) {
  const ref = useRef();
  const sphere = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      colors[i3] = Math.random() * 0.5 + 0.5;
      colors[i3 + 1] = Math.random() * 0.3 + 0.7;
      colors[i3 + 2] = Math.random() * 0.8 + 0.2;
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.5;
    }
  });

  return (
    <Points
      ref={ref}
      positions={sphere.positions}
      colors={sphere.colors}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      <mesh>
        <octahedronGeometry args={[2, 0]} />
        <meshBasicMaterial 
          color="#6e4bc3" 
          transparent 
          opacity={0.1} 
          wireframe 
        />
      </mesh>
      <mesh position={[3, 2, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial 
          color="#45b7d1" 
          transparent 
          opacity={0.08} 
          wireframe 
        />
      </mesh>
      <mesh position={[-3, -2, 0]}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshBasicMaterial 
          color="#a34b6e" 
          transparent 
          opacity={0.08} 
          wireframe 
        />
      </mesh>
    </group>
  );
}

export default function JourneyBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <AnimatedParticles count={1500} />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
