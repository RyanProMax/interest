const kmeans = require('node-kmeans');

const getImageSize = img => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = img;
    image.onload = e => {
      if (e.path && e.path.length) {
        const { width, height } = e.path[0];
        resolve([width, height, image]);
      } else {
        reject();
      }
    };
    image.onerror = reject;
  });
};

const transition = imageData => {
  const ret = [];
  for (let i = 0; i < imageData.length; i += 4) {
    ret.push([imageData[i], imageData[i + 1], imageData[i + 2], imageData[i + 3]]);
  }
  return ret;
};

export const getImageData = async img => {
  const [width, height, image] = await getImageSize(img);
  const canvas = document.createElement('canvas');
  [canvas.width, canvas.height] = [width, height];
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  return transition(ctx.getImageData(0, 0, width, height).data);
};

export const useKmeans = vectors => {
  return new Promise((resolve, reject) => {
    kmeans.clusterize(vectors, { k: 2 }, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};
