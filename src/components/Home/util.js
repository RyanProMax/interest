import * as THREE from 'three';

export function renderCoordsLine(radius, coordinates, color, offsetY = 0) {
  const group = new THREE.Group();
  coordinates.forEach(polygon => {
    const points = [];
    polygon[0].forEach(coordinate => {
      const { x, y, z } = coordinate2xyz(radius, coordinate[0], coordinate[1]);
      points.push(x, y + offsetY, z);
    });
    group.add(line(points, color));
  });
  return group;
}

export function line(points, color) {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(points);
  const attribue = new THREE.BufferAttribute(vertices, 3);
  geometry.attributes.position = attribue;
  const material = new THREE.LineBasicMaterial({
    color
  });
  const line = new THREE.LineLoop(geometry, material);
  return line;
}

// 经纬度转三维坐标
export function coordinate2xyz(radius, longitude, latitude) {
  const lon = (longitude * Math.PI) / 180;
  const lat = (latitude * Math.PI) / 180;
  const x = radius * Math.cos(lat) * Math.sin(lon);
  const y = radius * Math.sin(lat);
  const z = radius * Math.cos(lon) * Math.cos(lat);
  return { x, y, z };
}
