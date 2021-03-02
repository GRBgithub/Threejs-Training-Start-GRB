import React from "react";
import * as THREE from "three";
import styled from "styled-components";
import { gsap } from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
/* eslint import/no-webpack-loader-syntax: off */
import * as fragment from "!raw-loader!glslify-loader!./shader/fragment.glsl";
/* eslint import/no-webpack-loader-syntax: off */
import * as vertex from "!raw-loader!glslify-loader!./shader/vertex.glsl";


import water from "../../../../assets/img/water.jpeg";
const Threejs = () => {
  React.useEffect(() => {
    ThreejsStart();
  }, []);
  
  const ThreejsStart = () => {
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const sizes = {
      width: 800,
      height: 600,
    };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    // fov 75 (max 55)
    // aspect ratio
    scene.add(camera);

    const canvas = document.querySelector(".webgl");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize( sizes.width,sizes.height);


    renderer.render(scene,camera);
  };
  return (
    <Container>
      <canvas className="webgl"></canvas>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export default Threejs;
