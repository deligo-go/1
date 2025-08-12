import { useRef, useMemo, Suspense, useState, useEffect } from 'react';

// Try to import Three.js components, but provide fallback if they fail
let Canvas, useFrame, Points, PointMaterial, THREE;

try {
  const threeFiber = require('@react-three/fiber');
  const drei = require('@react-three/drei');
  THREE = require('three');
  
  Canvas = threeFiber.Canvas;
  useFrame = threeFiber.useFrame;
  Points = drei.Points;
  PointMaterial = drei.PointMaterial;
} catch (error) {
  console.warn('Three.js components not available, using CSS fallback');
}

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

function Scene() {
  return (
    <>
      <AnimatedParticles count={1500} />
      <FloatingGeometry />
    </>
  );
}

function CSSBackground() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30 animate-pulse" />
      
      {/* Floating particles using CSS */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-bounce" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '2s' }} />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-purple-500/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-blue-500/30 rounded-full animate-ping" />
      <div className="absolute top-3/4 left-1/3 w-8 h-8 bg-pink-500/20 transform rotate-45 animate-pulse" />
    </div>
  );
}

export default function JourneyBackground() {
  const [useThreeJS, setUseThreeJS] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check if Three.js components are available
    if (!Canvas || !useFrame || !Points || !PointMaterial || !THREE) {
      setUseThreeJS(false);
    }
  }, []);

  if (!useThreeJS || hasError) {
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
        <CSSBackground />
      </div>
    );
  }

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
      <Suspense fallback={<CSSBackground />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
          onError={() => setHasError(true)}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
