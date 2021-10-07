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
