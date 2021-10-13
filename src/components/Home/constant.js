import WORLD_GEO_DATA from '../../../public/geojson/world.geo';
import CHINA_GEO_DATA from '../../../public/geojson/china.geo.json';
import { domain } from '../../../settings';

export const TEXTURE = {
  STAR: '/texture/star.png',
  EARTH: '/texture/earth.png',
  GALAXY: '/images/galaxy.jfif'
};

export const EARTH_CONFIG = {
  RADIUS: 25,
  WORLD_GEO_DATA,
  CHINA_GEO_DATA,
  ROTATE_SPEED: 0.005,
  COLOR_BASE: 0x00aaaa,
  COLOR_CHINA: 0xe60000
};

export const GALAXY_CONFIG = {
  RADIUS: 800,
  STARS: 3000
};

export const MEW_CONFIG = {
  MODEL: `${domain}/model/mew/scene.gltf`,
  MODEL_FBX: `${domain}/model/mew_flying/mew_fly.fbx`,
  DISTANCE: -250
};

export const CAMERA_CONFIG = {
  DISTANCE: -300,
  ROTATE_SPEED: 0.1
};

export const RESOURCE_TOTAL = 3;

export const MARK_POINTS = {
  SIZE: 1,
  PILLAR_HEIGHT: 3,
  OPACITY: 0.8,
  PILLAR_OPACITY: 0.3,
  color: 'deepskyblue',
  URL: '/texture/point.png',
  DATA: [
    { name: 'SHENZHEN', longitude: 114.085947, latitude: 22.547 },
    { name: 'SHANGHAI', longitude: 121.567706, latitude: 31.245944 },
    { name: 'QINGHAI', longitude: 101.796095, latitude: 36.616043 },
    { name: 'GANSU', longitude: 100.455472, latitude: 38.932897 }
  ]
};
