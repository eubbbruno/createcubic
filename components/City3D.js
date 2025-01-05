// components/City3D.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const City3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    renderer.shadowMap.enabled = true;  // Habilitar sombras
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;  // Sombras suaves
    mountRef.current.appendChild(renderer.domElement);

    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    const colors = [0x6C63FF, 0x3F51B5, 0x8A2BE2, 0x483D8B];

    // Criar prédios com divisões visuais
    const blocks = [];
    for (let x = -50; x < 50; x += 12) {  // Aumentar espaçamento entre os prédios
      for (let y = -50; y < 50; y += 12) {  // Aumentar espaçamento entre os prédios
        const height = Math.random() * 15 + 6;  // Alturas variáveis
        const color = colors[Math.floor(Math.random() * colors.length)];

        const geometry = new THREE.BoxGeometry(10, height, 10);  // Prédios mais largos
        const material = new THREE.MeshStandardMaterial({ 
          color, 
          roughness: 0.6, 
          metalness: 0.4,
          emissive: color,  // Adicionar emissivo para brilho
          emissiveIntensity: 0.1,  // Intensidade do brilho
          flatShading: true
        });
        const building = new THREE.Mesh(geometry, material);

        // Divisões visuais usando arestas
        const edgeGeometry = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
        const wireframe = new THREE.LineSegments(edgeGeometry, lineMaterial);
        building.add(wireframe);

        building.position.set(x, height / 2, y);  // Posicionando os prédios
        building.castShadow = true;
        building.receiveShadow = true;

        cityGroup.add(building);
        blocks.push(building);
      }
    }

    // Aumentar o tamanho da arte 3D em 1.5x
    cityGroup.scale.set(3, 3, 3);  // Aumenta em 1.5x todo o grupo de prédios

    // Ajuste da posição da câmera para capturar a cidade ampliada
    camera.position.set(0, 250, 350);  // Aproximando a câmera para capturar a cidade ampliada
    camera.lookAt(0, 0, 0);

    // Luz principal para criar sombras
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);  // Luz mais forte para sombras
    directionalLight.position.set(100, 200, 100);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Luzes de glow para destacar os prédios
    const glowLight1 = new THREE.PointLight(0x6C63FF, 1, 300);  // Luz azul com mais intensidade
    glowLight1.position.set(50, 30, 50);
    scene.add(glowLight1);

    const glowLight2 = new THREE.PointLight(0x8A2BE2, 1, 300);  // Luz roxa com mais intensidade
    glowLight2.position.set(-50, 30, -50);
    scene.add(glowLight2);

    // Ambient light para iluminar de forma geral
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animação de subida e descida dos prédios
    const animate = () => {
      requestAnimationFrame(animate);
      cityGroup.rotation.y += 0.003;  // Rotação suave da cidade

      // Movimento de subir e descer
      blocks.forEach((building, index) => {
        const time = Date.now() * 0.001 + index;  // Diferente tempo para cada prédio
        const yMovement = Math.sin(time) * 2;  // Movimento de subida e descida
        building.position.y = yMovement + (building.geometry.parameters.height / 2);  // Movendo o prédio com base na altura
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default City3D;