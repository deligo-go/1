import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';


// Vertex shader for displacement effect
const vertexShader = `
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uMouseInfluence;
  uniform float uRippleTime;
  varying vec2 vUv;
  varying float vDisplacement;
  
  void main() {
    vUv = uv;
    
    vec3 pos = position;
    
    // Calculate distance from mouse position
    vec2 mousePos = uMouse;
    float dist = distance(uv, mousePos);
    
    // Create expanding ripple effect from mouse position
    float rippleSpeed = 3.0;
    float rippleFreq = 15.0;
    float rippleDecay = 2.5;
    
    float ripple = 0.0;
    if (uMouseInfluence > 0.01) {
      // Active ripple when mouse is moving
      float wave = sin(dist * rippleFreq - uRippleTime * rippleSpeed);
      ripple = wave * exp(-dist * rippleDecay) * uMouseInfluence;
    }
    
    // Water-like wave displacement
    float waveX = sin(uv.x * 8.0 + uTime * 1.2) * 0.005;
    float waveY = cos(uv.y * 6.0 + uTime * 0.8) * 0.005;
    float baseWave = (waveX + waveY) * (1.0 - uMouseInfluence * 0.5);
    
    // Mouse influence with smooth falloff
    float mouseEffect = 0.0;
    if (dist < 0.3) {
      mouseEffect = (1.0 - dist / 0.3) * uMouseInfluence * 0.08;
      mouseEffect *= sin(3.14159 * (1.0 - dist / 0.3)); // Smooth bell curve
    }
    
    // Combine all effects
    float displacement = ripple * 0.06 + mouseEffect + baseWave;
    
    pos.z += displacement;
    vDisplacement = displacement;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// Fragment shader for the background
const fragmentShader = `
  uniform vec2 uMouse;
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform sampler2D uTexture;
  uniform bool uUseTexture;
  uniform float uMouseInfluence;
  varying vec2 vUv;
  varying float vDisplacement;
  
  void main() {
    vec2 uv = vUv;
    
    // Add subtle wave distortion to UV coordinates
    float waveDistortion = 0.008 * (1.0 - uMouseInfluence * 0.3);
    uv.x += sin(uv.y * 12.0 + uTime * 1.8) * waveDistortion;
    uv.y += cos(uv.x * 10.0 + uTime * 1.2) * waveDistortion;
    
    vec3 color;
    
    if (uUseTexture) {
      // Sample the texture with distorted UVs
      color = texture2D(uTexture, uv).rgb;
      
      // Add displacement-based color variation for water-like effect
      float displacementEffect = vDisplacement * 8.0;
      color += vec3(displacementEffect * 0.1, displacementEffect * 0.15, displacementEffect * 0.2);
      
      // Add subtle blue tint for water effect
      color.b += abs(vDisplacement) * 0.3;
    } else {
      // Create gradient background
      float gradient = smoothstep(0.0, 1.0, uv.y + vDisplacement * 0.5);
      color = mix(uColor1, uColor2, gradient);
      
      // Add some noise for texture
      float noise = sin(uv.x * 50.0) * sin(uv.y * 50.0) * 0.015;
      color += noise;
    }
    
    // Add water-like highlights based on displacement
    float highlight = abs(vDisplacement) * 3.0;
    color += vec3(highlight * 0.2, highlight * 0.3, highlight * 0.5);
    
    // Subtle vignette effect
    float dist = distance(uv, vec2(0.5));
    float vignette = 1.0 - smoothstep(0.3, 0.8, dist);
    color *= 0.7 + 0.3 * vignette;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

function DisplacementPlane() {
  const meshRef = useRef();
  const { viewport, camera } = useThree();
  
  
  const mousePosition = useRef({ x: 0.5, y: 0.5 });
  const targetMouseInfluence = useRef(0);
  const currentMouseInfluence = useRef(0);
  const lastMouseMove = useRef(0);
  const rippleStartTime = useRef(0);

  // Create shader material
  const shaderMaterial = useMemo(() => {
    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0 },
        uRippleTime: { value: 0 },
        uMouseInfluence: { value: 0 },
        uColor1: { value: new THREE.Color('#0a0a0a') },
        uColor2: { value: new THREE.Color('#1a1a2e') },
        uTexture: { value: texture },
        uUseTexture: { value: true }
      },
      side: THREE.DoubleSide,
    });
  });

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1.0 - (event.clientY - rect.top) / rect.height; // Flip Y coordinate
      
      // Only update if mouse position changed significantly
      const dx = Math.abs(x - mousePosition.current.x);
      const dy = Math.abs(y - mousePosition.current.y);
      
      if (dx > 0.01 || dy > 0.01) {
        mousePosition.current = { x, y };
        targetMouseInfluence.current = 1.0;
        lastMouseMove.current = Date.now();
        rippleStartTime.current = Date.now();
      }
    };

    const handleMouseLeave = () => {
      targetMouseInfluence.current = 0;
    };

    const handleMouseEnter = () => {
      rippleStartTime.current = Date.now();
    };

    // Add event listeners to the hero section specifically
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
      heroSection.addEventListener('mouseenter', handleMouseEnter);
      
      return () => {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
        heroSection.removeEventListener('mouseenter', handleMouseEnter);
      };
    }
  }, []);

  // Animation loop
  useFrame((state) => {
    if (meshRef.current && shaderMaterial) {
      const time = state.clock.getElapsedTime();
      
      // Update time uniform
      shaderMaterial.uniforms.uTime.value = time;
      
      // Update mouse position
      shaderMaterial.uniforms.uMouse.value.set(
        mousePosition.current.x,
        mousePosition.current.y
      );
      
      // Smooth mouse influence decay
      const timeSinceLastMove = Date.now() - lastMouseMove.current;
      if (timeSinceLastMove > 100) {
        targetMouseInfluence.current *= 0.95; // Decay when mouse stops moving
      }
      
      // Smooth interpolation for mouse influence
      currentMouseInfluence.current = THREE.MathUtils.lerp(
        currentMouseInfluence.current,
        targetMouseInfluence.current,
        0.1
      );
      
      shaderMaterial.uniforms.uMouseInfluence.value = currentMouseInfluence.current;
    }
  });

  return (
    <mesh
      ref={meshRef}
      material={shaderMaterial}
      position={[0, 0, -1]}
      scale={[viewport.width, viewport.height, 1]}
    >
      <planeGeometry args={[1, 1, 64, 64]} />
    </mesh>
  );
}

export default function ShaderBackground() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        <DisplacementPlane />
      </Canvas>
    </div>
  );
}
