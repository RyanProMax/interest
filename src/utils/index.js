import { useState, useEffect } from 'react';

export const useViewport = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

export const useGetDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [model, setModel] = useState('');

  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent));
    setModel(navigator.userAgent);
  }, []);

  return { isMobile, model };
};

export function debounce(fn, delay, immediate = false) {
  let timeout, result;
  function _debounce(...args) {
    const context = this;
    return new Promise(resolve => {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        // 如果定时器不存在，则立即执行
        const callNow = !timeout;
        // 并设置定时任务，保证 timeout 毫秒内不会再次执行
        timeout = setTimeout(() => {
          // 在 delay 毫秒后将 timeout 设置为空
          timeout = null;
        }, delay);
        if (callNow) {
          result = fn.apply(context, args);
          resolve(result);
        }
      } else {
        timeout = setTimeout(() => {
          result = fn.apply(context, args);
          resolve(result);
        }, delay);
      }
    });
  }

  _debounce.cancel = function () {
    if (timeout) clearTimeout(timeout);
    timeout = null;
  };

  return _debounce;
}

/**
 * 截取视频指定时间图片
 *
 * @param {string} url 视频链接
 * @param {number} currentTime 指定视频时间
 * @param {number} width 图片宽度
 * @param {number} height 图片高度
 * @returns
 */
export function screenShot(url, currentTime, width = 320, height = 180) {
  return new Promise(resolve => {
    const video = document.createElement('video');
    video.src = url;
    video.controls = true;
    video.currentTime = currentTime;
    video.oncanplay = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(video, 0, 0, width, height);

      resolve(canvas.toDataURL('image/png'));
    };
  });
}

/**
 * 获取视频指定时间图片
 */
export function videoToImage({ src, interval, startTime, duration, width, height }) {
  const fillList = ['#', '*', '+', '"', '　'];
  const gap = 6;
  const video = document.createElement('video');
  video.src = src;
  video.muted = true;
  video.currentTime = startTime;
  const _begin = performance.now();
  const ret = [];
  const scale = width / height;

  return new Promise(resolve => {
    const _collect = ({ canvas, ctx, videoWidth, videoHeight }) => {
      const cuttingWidth = videoHeight * scale;
      const cuttingHeight = videoWidth / scale;
      if (videoWidth > cuttingWidth) {
        ctx.drawImage(video, Math.ceil((videoWidth - cuttingWidth) / 2), 0, Math.ceil(cuttingWidth), videoHeight, 0, 0, width, height);
      } else {
        ctx.drawImage(video, 0, Math.ceil((videoHeight - cuttingHeight) / 2), videoWidth, Math.ceil(cuttingHeight), 0, 0, width, height);
      }
      const imgData = ctx.getImageData(0, 0, width, height).data;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#000';

      ctx.font = gap + 'px Verdana';
      for (let h = 0; h < height; h += gap) {
        for (let w = 0; w < width; w += gap) {
          const position = (width * h + w) * 4;
          const r = imgData[position],
            g = imgData[position + 1],
            b = imgData[position + 2];
          // calculate gray
          const gray = (r * 30 + g * 59 + b * 11 + 50) / 100;
          const i = Math.min(fillList.length - 1, parseInt(gray / (255 / fillList.length)));
          // render
          ctx.fillText(fillList[i], w, h);
        }
      }
      ret.push(canvas.toDataURL('image/png'));

      if (performance.now() - _begin < duration * 1000) {
        setTimeout(() => {
          _collect({ canvas, ctx, videoWidth, videoHeight });
        }, interval);
      } else {
        resolve(ret);
      }
    };

    video.oncanplay = () => {
      const { videoWidth, videoHeight } = video;
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      video.play();
      _collect({ canvas, ctx, videoWidth, videoHeight });
    };
  });
}
