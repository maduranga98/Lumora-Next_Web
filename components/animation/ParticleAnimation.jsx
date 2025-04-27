"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const ParticleAnimation = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Camera position
    camera.position.z = 30;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2500;

    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    // Create random positions for particles
    for (let i = 0; i < particleCount * 3; i++) {
      // Position - spread particles wider
      posArray[i] = (Math.random() - 0.5) * 80;

      // Color - gradients of blue and purple
      if (i % 3 === 0) {
        colorArray[i] = 0.5 + Math.random() * 0.5; // R component
        colorArray[i + 1] = 0.2 + Math.random() * 0.3; // G component
        colorArray[i + 2] = 0.8 + Math.random() * 0.2; // B component
      }
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray, 3)
    );

    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    // Create the particle system
    const particleSystem = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particleSystem);

    // Mouse move event
    const onMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      frame += 0.01;

      // Rotate the entire particle system
      particleSystem.rotation.x = mousePosition.y * 0.3;
      particleSystem.rotation.y = mousePosition.x * 0.3;

      // Wave animation
      const positions = particleSystem.geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        // Apply a sine wave to the y position based on x and z
        const x = positions[i];
        const z = positions[i + 2];

        // Use mouse position to influence the wave
        positions[i + 1] =
          Math.sin(frame + x * 0.1) * 2 * (1 + mousePosition.y) +
          Math.cos(frame + z * 0.1) * 2 * (1 + mousePosition.x);
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (
        containerRef.current &&
        containerRef.current.contains(renderer.domElement)
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose of resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    ></div>
  );
};

export default ParticleAnimation;
