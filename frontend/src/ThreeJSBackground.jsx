import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.8, 8),
      new THREE.OctahedronGeometry(0.4),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x4f46e5, transparent: true, opacity: 0.3 }),
      new THREE.MeshPhongMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.3 }),
      new THREE.MeshPhongMaterial({ color: 0x10b981, transparent: true, opacity: 0.3 }),
      new THREE.MeshPhongMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.3 }),
    ];

    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 10;
    sceneRef.current = { scene, camera, renderer, shapes };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01 + index * 0.001;
        shape.rotation.y += 0.01 + index * 0.001;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (sceneRef.current) {
        const { camera, renderer } = sceneRef.current;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default ThreeJSBackground;