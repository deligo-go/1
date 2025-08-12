import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function Sphere() {
  const meshRef = useRef();
  const mouse = useRef(new THREE.Vector2());

  useMemo(() => {
    const onMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();

    // Diagonal movement
    meshRef.current.position.x = Math.sin(time * 0.5) * 2.5;
    meshRef.current.position.y = Math.cos(time * 0.5) * 2.5;

    // Mouse follow
    const target = new THREE.Vector3(mouse.current.x * 2, mouse.current.y * 2, 0);
    meshRef.current.position.lerp(target, 0.02);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color={0x9f00ff}
        emissive={0xaa00ff}
        emissiveIntensity={2}
        metalness={0.8}
        roughness={0.3}
      />
    </mesh>
  );
}

export default function GlowingSphereBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: 'black' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 5]} intensity={1} />
        <Sphere />
        <EffectComposer>
          <Bloom
            intensity={1.2} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold.
            luminanceSmoothing={0.5} // smoothness of the luminance threshold.
            height={300} // render height
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
