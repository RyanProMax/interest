import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const width = window.innerWidth;
const height = window.innerHeight;

export default function Home() {
  const container = useRef(null);
  const renderer = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const control = useRef(null);

  useEffect(() => {
    // 渲染器
    const initRenderer = () => {
      const _renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      _renderer.setPixelRatio(window.devicePixelRatio);
      _renderer.setSize(width, height);
      renderer.current = _renderer;
      container.current.appendChild(_renderer.domElement);
    };

    // 摄像机
    const initCamera = () => {
      const _camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
      );
      _camera.position.set(0, 0, 200);
      _camera.lookAt(0, 0, 0);
      camera.current = _camera;
    };

    // 场景
    const initScene = () => {
      const _scene = new THREE.Scene();
      _scene.background = new THREE.Color(0x020924);
      _scene.fog = new THREE.Fog(0x020924, 200, 1000);
      scene.current = _scene;
    };

    // 控制器
    const initControl = () => {
      const _control = new OrbitControls(
        camera.current,
        renderer.current.domElement
      );
      _control.enableDamping = true;
      _control.enableZoom = true;
      _control.autoRotate = false;
      _control.autoRotateSpeed = 2;
      _control.enablePan = true;
      control.current = _control;
    };

    // 光照
    const initLight = () => {
      const _scene = scene.current;

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1.1);
      _scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
      directionalLight.position.set(1, 0.1, 0).normalize();
      let directionalLight2 = new THREE.DirectionalLight(0xff2ffff, 0.2);
      directionalLight2.position.set(1, 0.1, 0.1).normalize();
      _scene.add(directionalLight);
      _scene.add(directionalLight2);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.2);
      hemiLight.position.set(0, 1, 0);
      _scene.add(hemiLight);

      const directionalLight3 = new THREE.DirectionalLight(0xffffff);
      directionalLight3.position.set(1, 500, -20);
      directionalLight3.castShadow = true;
      directionalLight3.shadow.camera.top = 18;
      directionalLight3.shadow.camera.bottom = -10;
      directionalLight3.shadow.camera.left = -52;
      directionalLight3.shadow.camera.right = 12;
      _scene.add(directionalLight3);
    };

    // 星空
    const initStars = number => {
      const positions = [];
      const colors = [];
      const geometry = new THREE.BufferGeometry();
      for (let i = 0; i < number; i++) {
        const vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        positions.push(vertex.x, vertex.y, vertex.z);
        const color = new THREE.Color();
        color.setHSL(
          Math.random() * 0.2 + 0.5,
          0.55,
          Math.random() * 0.25 + 0.55
        );
        colors.push(color.r, color.g, color.b);
      }
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const starsMaterial = new THREE.PointsMaterial({
        map: new THREE.TextureLoader().load('/texture/star.png'),
        size: 1,
        transparent: true,
        opacity: 1,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });

      const stars = new THREE.Points(geometry, starsMaterial);
      stars.scale.set(500, 500, 500);

      scene.current.add(stars);
    };

    const initEarth = () => {
      const globeGgeometry = new THREE.SphereGeometry(100, 200, 200);
      const globeMaterial = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load('/texture/earth.png')
      });
      const globeMesh = new THREE.Mesh(globeGgeometry, globeMaterial);
      // group.rotation.set(0.5, 2.9, 0.1);
      // group.add(globeMesh);

      scene.current.add(globeMesh);
    };

    const animate = () => {
      control.current && control.current.update();
      renderer.current.render(scene.current, camera.current);
    };

    const handleRender = () => {
      renderer.current.setAnimationLoop(animate);
    };

    const handleResize = () => {
      const _camera = camera.current;
      const { clientWidth, clientHeight } = container.current;

      _camera.aspect = clientWidth / clientHeight;
      _camera.updateProjectionMatrix();
      renderer.current.setSize(clientWidth, clientHeight);
    };

    const init = () => {
      initRenderer();
      initCamera();
      initScene();
      initControl();
      initLight();
      initStars(3000);
      initEarth();

      handleRender();
    };

    init();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="interest-home">
      <div ref={container} className="interest-home__container" />
    </div>
  );
}
