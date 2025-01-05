// components/FloatingCubes.js
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube({ initialPosition, color, boundary }) {
  const mesh = useRef();

  const [velocity] = useState(() => new THREE.Vector3(
    (Math.random() - 0.5) * 0.1,
    (Math.random() - 0.5) * 0.1,
    (Math.random() - 0.5) * 0.1
  ));

  const [isRotating, setIsRotating] = useState(true);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.add(velocity);

      ['x', 'y', 'z'].forEach(axis => {
        if (mesh.current.position[axis] > boundary) {
          mesh.current.position[axis] = boundary;
          velocity[axis] *= -1;
        } else if (mesh.current.position[axis] < -boundary) {
          mesh.current.position[axis] = -boundary;
          velocity[axis] *= -1;
        }
      });

      if (isRotating) {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
      }
    }
  });

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <mesh
      ref={mesh}
      position={initialPosition}
      onClick={handleClick}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.5}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function FloatingCubesBackground() {
  const boundary = 20;
  const cubes = [];
  const cubeCount = 50;

  for (let i = 0; i < cubeCount; i++) {
    const initialPosition = new THREE.Vector3(
      (Math.random() - 0.5) * boundary * 2,
      (Math.random() - 0.5) * boundary * 2,
      (Math.random() - 0.5) * boundary * 2
    );

    const colors = ['#6C63FF', '#3F51B5', '#FFFFFF', '#000000'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    cubes.push({ initialPosition, color });
  }

  return (
    <Canvas
      shadows
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 30], fov: 75 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1}
        castShadow
      />
      <directionalLight
        position={[-10, -10, -10]}
        intensity={0.5}
        castShadow
      />

      {cubes.map((cube, index) => (
        <FloatingCube
          key={index}
          initialPosition={cube.initialPosition}
          color={cube.color}
          boundary={boundary}
        />
      ))}

      <OrbitControls
        enableZoom={true}
        enableRotate={true}
        enablePan={false}
        maxDistance={60}
        minDistance={20}
      />
    </Canvas>
  );
}