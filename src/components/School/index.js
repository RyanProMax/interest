import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { domain } from '../../../settings';
import Main from '../Main';

export default function School() {
  const container = useRef(null);
  const loadingRef = useRef(null);
  const threeRef = useRef({});

  useEffect(() => {
    const width = Math.round(container.current.clientWidth);
    const height = window.innerHeight - 71 - 40;

    // 渲染器
    const initRenderer = () => {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        logarithmicDepthBuffer: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      threeRef.current.renderer = renderer;
      container.current.appendChild(renderer.domElement);
    };

    // 摄像机
    const initCamera = () => {
      const camera = new THREE.PerspectiveCamera(75, width / height, 10, 100000);
      camera.position.set(-1500, 1500, 3000);
      camera.lookAt(0, 0, 0);
      threeRef.current.camera = camera;
    };

    // 场景
    const initScene = () => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      threeRef.current.scene = scene;
    };

    // 控制器
    const initControl = () => {
      const { camera, renderer } = threeRef.current;
      const control = new OrbitControls(camera, renderer.domElement);
      control.enableDamping = true;
      control.enableZoom = true;
      control.autoRotate = true;
      // control.autoRotateSpeed = CAMERA_CONFIG.ROTATE_SPEED;
      // control.maxDistance = GALAXY_CONFIG.RADIUS - 200;
      threeRef.current.control = control;
    };

    // 光照
    const initLight = () => {
      const { scene } = threeRef.current;
      scene.add(new THREE.AmbientLight(0xffffff, 0.3));
      const light = new THREE.DirectionalLight(0xffffff, 0.8 * Math.PI);
      light.position.set(0, 5000, 0);
      scene.add(light);
    };

    // 模型
    const initModal = async () => {
      const { scene } = threeRef.current;
      const loader = new OBJLoader();
      const mtlLoader = new MTLLoader();
      mtlLoader.load(`${domain}/model/school/material.mtl`, material => {
        loader.setMaterials(material);
        loader.load(
          `${domain}/model/school/model.obj`,
          function (obj) {
            obj.position.set(0, 0, 0);

            const scale = 0.01;
            obj.scale.set(scale, scale, scale);

            obj.position.set(-3000, 0, 2000);

            scene.add(obj);
          },
          function (xhr) {
            if (xhr.total === 0) return;
            // 侦听模型加载进度
            loadingRef.current && loadingRef.current.handleProcess(Math.round((xhr.loaded / xhr.total) * 100));
          },
          function (error) {
            console.error('error: ', error);
          }
        );
      });
    };

    // 动画
    const animate = () => {
      const { control, renderer, scene, camera } = threeRef.current;
      control && control.update();
      renderer.render(scene, camera);
    };

    // 首次绘制
    const handleRender = () => {
      const { renderer } = threeRef.current;
      renderer.setAnimationLoop(animate);
    };

    // resize
    const handleResize = () => {
      const { camera, renderer } = threeRef.current;
      const width = Math.round(container.current.clientWidth);
      const height = window.innerHeight - 71 - 40;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const init = () => {
      initRenderer();
      initCamera();
      initScene();
      initControl();
      initLight();
      initModal();

      handleRender();
    };

    init();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Main ref={loadingRef} className='interest-demo'>
      <div ref={container} className='interest-demo__content' />
    </Main>
  );
}
