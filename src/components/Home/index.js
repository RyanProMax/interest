import Footer from '../Footer';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CAMERA_CONFIG, EARTH_CONFIG, GALAXY_CONFIG, MEW_CONFIG, RESOURCE_TOTAL, TEXTURE } from './constant';
import { renderCountryLine } from './util';
import Loading from '../Loading';

export default function Home() {
  const container = useRef(null);
  const renderer = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const control = useRef(null);
  const mew = useRef(null);
  const earthGroup = useRef(null);
  const [loaded, setLoaded] = useState(0);
  const textureLoader = useRef(new THREE.TextureLoader());

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

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
      const _camera = new THREE.PerspectiveCamera(75, width / height, 1, GALAXY_CONFIG.RADIUS * 2);
      _camera.position.set(5, 20, CAMERA_CONFIG.DISTANCE);
      _camera.lookAt(0, 0, 0);
      camera.current = _camera;
    };

    // 场景
    const initScene = () => {
      const _scene = new THREE.Scene();
      _scene.background = new THREE.Color(0x020924);
      _scene.fog = new THREE.Fog(0x999999, GALAXY_CONFIG.RADIUS, GALAXY_CONFIG.RADIUS * 3);
      scene.current = _scene;
    };

    // 控制器
    const initControl = () => {
      const _control = new OrbitControls(camera.current, renderer.current.domElement);
      _control.enableDamping = true;
      _control.enableZoom = true;
      _control.autoRotate = true;
      _control.autoRotateSpeed = CAMERA_CONFIG.ROTATE_SPEED;
      // 禁止平移
      _control.enablePan = false;
      _control.maxDistance = GALAXY_CONFIG.RADIUS - 200;
      control.current = _control;
    };

    // 光照
    const initLight = () => {
      scene.current.add(new THREE.AmbientLight(0xffffff, 0.3));
      var light = new THREE.DirectionalLight(0xffffff, 0.8 * Math.PI);
      light.position.set(0, 50, 0);
      scene.current.add(light);
    };

    // 银河
    const initGalaxy = () => {
      // 星系球体
      const galaxyGeometry = new THREE.SphereGeometry(GALAXY_CONFIG.RADIUS, 50, 50);
      // 反转，纹理转为内部
      galaxyGeometry.scale(1, 1, -1);
      // 纹理
      textureLoader.current.load(TEXTURE.GALAXY, texture => {
        const galaxyMaterial = new THREE.MeshBasicMaterial({ map: texture });
        setLoaded(n => n + 1);

        const galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
        scene.current.add(galaxy);
      });
    };

    // 星空
    const initStars = () => {
      const positions = [];
      const colors = [];
      const geometry = new THREE.BufferGeometry();
      for (let i = 0; i < GALAXY_CONFIG.STARS; i++) {
        const vertex = new THREE.Vector3();
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        positions.push(vertex.x, vertex.y, vertex.z);
        const color = new THREE.Color();
        color.setHSL(Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55);
        colors.push(color.r, color.g, color.b);
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

      const starsMaterial = new THREE.PointsMaterial({
        map: textureLoader.current.load(TEXTURE.STAR),
        size: 1,
        transparent: true,
        opacity: 1,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });
      setLoaded(n => n + 1);

      const stars = new THREE.Points(geometry, starsMaterial);
      stars.scale.set(500, 500, 500);

      scene.current.add(stars);
    };

    // 绘制矢量地球
    const initEarth = () => {
      const group = new THREE.Group();

      // render Earth
      const earthGeometry = new THREE.SphereGeometry(EARTH_CONFIG.RADIUS, 50, 50);
      const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x020924, transparent: true, opacity: 0.8 });
      const earth = new THREE.Mesh(earthGeometry, earthMaterial);
      group.add(earth);

      // render world
      EARTH_CONFIG.WORLD_GEO_DATA.features.forEach(country => {
        if (country.geometry.type === 'Polygon') {
          country.geometry.coordinates = [country.geometry.coordinates];
        }
        const line = renderCountryLine(EARTH_CONFIG.RADIUS, country.geometry.coordinates);
        group.add(line);

        scene.current.add(group);
        earthGroup.current = group;
      });
    };

    // 绘制梦幻
    const initMew = () => {
      const loader = new GLTFLoader();
      loader.load(
        MEW_CONFIG.MODEL,
        gltf => {
          setLoaded(n => n + 1);

          gltf.scene.position.set(0, 0, MEW_CONFIG.DISTANCE);

          scene.current.add(gltf.scene);
          mew.current = gltf;
        },
        xhr => {},
        function (error) {
          console.error('error: ', error);
        }
      );
    };

    const animate = () => {
      earthGroup.current.rotateY(EARTH_CONFIG.ROTATE_SPEED);
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
      initGalaxy();
      initStars();
      initEarth();
      initMew();

      handleRender();
    };

    init();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='interest-home'>
      <div ref={container} className='interest-home__container' />
      <Footer />
      <Loading text={`资源加载中，请稍后：${loaded}/${RESOURCE_TOTAL}`} progress={(loaded / RESOURCE_TOTAL) * 100} />
    </div>
  );
}
