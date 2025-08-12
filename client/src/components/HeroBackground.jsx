import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
  const canvasRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const particleSystemRef = useRef();
  const animationIdRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set up Three.js scene exactly like the HTML version
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    camera.position.z = 5;

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create glowing particles exactly as in HTML
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x6e4bc3,
      size: 0.1,
      transparent: true,
      blending: THREE.AdditiveBlending,
      map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png')
    });

    const particleGeometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      vertices.push(x, y, z);
    }
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    particleSystemRef.current = particleSystem;

    // Animation loop exactly like HTML
    function animate() {
      animationIdRef.current = requestAnimationFrame(animate);
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.0007;
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize exactly like HTML
    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <>
      {/* CSS styles from the HTML exactly */}
      <style>{`
        /* Floating Shapes */
        .floating-shapes {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        .shape {
          position: absolute;
          background: linear-gradient(45deg, #a34b6e80, #6e4bc380);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
          filter: blur(10px);
        }
        .shape:nth-child(1) { width: 100px; height: 100px; top: 15%; left: 15%; animation-delay: 0s; }
        .shape:nth-child(2) { width: 70px; height: 70px; top: 65%; right: 10%; animation-delay: 3s; }
        .shape:nth-child(3) { width: 50px; height: 50px; bottom: 20%; left: 60%; animation-delay: 6s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-25px) rotate(5deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(-25px) rotate(-5deg); }
        }
      `}</style>

      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,
        background: 'radial-gradient(circle at 50% 50%, rgba(110, 75, 195, 0.15) 0%, transparent 70%)'
      }}>
        {/* Floating blur shapes exactly from HTML */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        {/* Three.js canvas exactly positioned like HTML */}
        <canvas 
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '0'
          }}
        />
      </div>
    </>
  );
}
