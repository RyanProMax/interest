import WORLD_GEO_DATA from '../../../public/geojson/world.geo';
import { domain } from '../../../settings';

export const TEXTURE = {
  STAR: '/texture/star.png',
  EARTH: '/texture/earth.png',
  GALAXY: '/images/galaxy.jfif'
};

export const EARTH_CONFIG = {
  RADIUS: 25,
  WORLD_GEO_DATA,
  ROTATE_SPEED: 0.005
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
