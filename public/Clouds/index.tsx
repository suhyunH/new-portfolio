"use client"; // this is a client component 👈🏽

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function DubaiClouds() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1);
    camera.position.set(0, 0, 5);

    scene.background = new THREE.Color("transparent");
    // 부드러운 빛을 위해 AmbientLight 추가
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);

    // 3d 모델을 위한 DirectionalLight 추가
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight, ambient);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current ?? undefined,
      antialias: true,
    });

    const loader = new GLTFLoader();
    loader.load("/retroComputer/scene.gltf", function (gltf) {
      scene.add(gltf.scene);
      function animate() {
        requestAnimationFrame(animate);

        gltf.scene.rotation.y -= 0.01;
        renderer.render(scene, camera);
      }
      animate();
    });
  }, []);

  return <canvas width={300} height={300} ref={canvasRef} />;
}
