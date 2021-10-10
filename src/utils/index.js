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
    setIsMobile(
      /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
    );
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
      console.log('screenShot, onCanPlay');
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(video, 0, 0, width, height);

      resolve(canvas.toDataURL('image/png'));
    };
  });
}
