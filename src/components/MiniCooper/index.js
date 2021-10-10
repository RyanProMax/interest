import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { basePath } from '../../../settings';
import { Spin, Progress } from 'antd';
import Main from '../Main';
import { render } from 'less';

const description = [
  { val: 'Mini Cooper 3D 模型。' },
  { val: '* 基于 Three.js。' }
];

export default function MiniCooper(props) {
  const { isMobile } = props;

  const container = useRef(null);
  const rendererRef = useRef(null);
  const [area, setArea] = useState('default');
  const [process, setProcess] = useState(0);

  useEffect(() => {
    const width = Math.round(container.current.clientWidth);
    const height = window.innerHeight - 400;

    console.log('renderer.current: ', rendererRef.current);
    if (!rendererRef.current) {
      // 场景
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      // 渲染器
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      // 摄像机
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      switch (area) {
        // 车内视角
        case 'inside':
          camera.position.set(0, 1.2, -0.8);
          camera.lookAt(0, 1.2, 1000);
          break;
        default:
          camera.position.set(-4, 2, 4);
      }

      // 光照
      const light = new THREE.DirectionalLight(0xff8c00, 1);
      light.position.set(0, 5, 20);
      scene.add(light);

      // 加载模型
      const loader = new GLTFLoader();
      loader.load(
        `https://cloud.zhangyuyan.cn/model/mini_cooper_s/scene.gltf`,
        function (gltf) {
          setProcess(0);

          const scale = 10000;
          gltf.scene.scale.set(scale, scale, scale);

          // 修复模型过暗的问题
          gltf.scene.traverse(function (child) {
            if (child.isMesh) {
              child.material.emissive = child.material.color;
              child.material.emissiveMap = child.material.map;
            }
          });

          scene.add(gltf.scene);
        },
        function (xhr) {
          console.log('xhr: ', xhr);
          if (xhr.total === 0) return;
          // 侦听模型加载进度
          console.log((xhr.loaded / xhr.total) * 100 + '%');
          setProcess(Math.round((xhr.loaded / xhr.total) * 100));
        },
        function (error) {
          console.error('error: ', error);
        }
      );

      renderer.setSize(width, height);
      container.current.appendChild(renderer.domElement);

      // 控制器
      const controls = new OrbitControls(camera, renderer.domElement);

      const animate = () => {
        switch (area) {
          case 'inside':
            break;
          default:
            controls.update();
        }

        renderer.render(scene, camera);
      };

      renderer.setAnimationLoop(animate);
      rendererRef.current = renderer;
    } else {
      rendererRef.current.setSize(width, height);
      container.current.removeChild(container.current.childNodes[0]);
      container.current.appendChild(rendererRef.current.domElement);
    }
  }, [area, process, isMobile]);

  return (
    <Main
      className="interest-mini-cooper"
      title="Mini Cooper"
      description={description}
      {...props}
    >
      <div ref={container} className="interest-mini-cooper__content" />
      {process > 0 && process <= 100 && (
        <div className="interest-mini-cooper__loading">
          <Spin />
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068'
            }}
            percent={process}
            className="interest-mini-cooper__progress"
          />
        </div>
      )}
    </Main>
  );
}
