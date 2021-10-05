import { fabric } from 'fabric';
import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { calculateMainColor, getAverageColor } from './utils';

function Generate({ url, width = 800, height = 800, pixel = 8, fileList, onFinish }, ref) {
  const canvasInstance = useRef(null);
  const ctxRef = useRef(null);
  const blockMainColorsRef = useRef([]);
  const imgListRef = useRef([]);

  useImperativeHandle(ref, () => ({
    changeVal: name => {
      const canvas = canvasInstance.current;
      const { width, height } = canvas;
      const dataURL = canvas.toDataURL({
        width,
        height,
        left: 0,
        top: 0,
        format: 'png'
      });
      const link = document.createElement('a');
      link.download = name;
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }));

  // 初始化
  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      selectable: false,
      selection: false,
      hoverCursor: 'pointer',
      // 禁止浏览器缩放，否则导致图像计算异常
      enableRetinaScaling: false
    });
    const ctx = canvas.getContext('2d');

    canvasInstance.current = canvas;
    ctxRef.current = ctx;
  }, []);

  useEffect(() => {
    const canvas = canvasInstance.current;
    const ctx = ctxRef.current;
    const { width, height } = canvas;

    const COLUMNS = Math.floor(width / pixel);

    const getMainRGBA = () => {
      // 收集单元格子色彩信息
      const rgbas = [];
      for (let y = 0; y < canvas.height; y += pixel) {
        for (let x = 0; x < canvas.width; x += pixel) {
          // 获取每一块格子的色彩data
          const { data } = ctx.getImageData(x, y, pixel, pixel);
          rgbas[(y / pixel) * COLUMNS + x / pixel] = [];
          for (let i = 0; i < data.length; i += 4) {
            // 4个4个收集，因为每4个就组成一个像素的rgba
            rgbas[(y / pixel) * COLUMNS + x / pixel].push([data[i], data[i + 1], data[i + 2], data[i + 3]]);
          }
        }
      }

      // 计算每个单元的主色调
      blockMainColorsRef.current = calculateMainColor(rgbas);

      // 生成图片
      generateImg();
    };

    // 生成图片
    const generateImg = () => {
      const mainColors = blockMainColorsRef.current;
      const composeColors = imgListRef.current;

      // 收集最终绘制的图片
      const urls = [];

      for (let main of mainColors) {
        // 遍历所有单元格子的主色调
        let closestIndex = 0; // 最接近主色调的图片的index
        let minimumDiff = Infinity; // 相差值

        for (let i = 0; i < composeColors.length; i++) {
          const { rgba } = composeColors[i];
          // 格子主色调rgba四个值，减去图片主色调rgba四个值，的平方
          const diff = (rgba[0] - main[0]) ** 2 + (rgba[1] - main[1]) ** 2 + (rgba[2] - main[2]) ** 2 + (rgba[3] - main[3]) ** 2;

          // 然后开跟比较
          if (Math.sqrt(diff) < minimumDiff) {
            minimumDiff = Math.sqrt(diff);
            closestIndex = i;
          }
        }

        // 把最小色差的图片url添加进数组urls
        urls.push(composeColors[closestIndex].url);
      }

      // 将图片分别绘制在对应的格子中
      for (let i = 0; i < urls.length; i++) {
        fabric.Image.fromURL(urls[i], img => {
          const scale = img.height > img.width ? pixel / img.width : pixel / img.height;
          img.set({
            left: (i % COLUMNS) * pixel,
            top: Math.floor(i / COLUMNS) * pixel,
            originX: 'center',
            scaleX: scale,
            scaleY: scale
          });
          canvas.add(img);
        });
      }
      onFinish();
    };

    (async () => {
      const promises = [];
      fileList.forEach(file => {
        promises.push(getAverageColor(file.blobURL));
      });
      imgListRef.current = await Promise.all(promises);

      fabric.Image.fromURL(url, img => {
        const scale = img.height > img.width ? width / img.width : height / img.height;
        img.set({
          left: width / 2, // 距离左边的距离
          originX: 'center', // 图片在原点的对齐方式
          top: 0,
          scaleX: scale, // 横向缩放
          scaleY: scale, // 纵向缩放
          selectable: false
        });
        img.on('added', e => {
          setTimeout(() => {
            getMainRGBA();
          }, 500);
        });
        canvas.add(img); //将图片添加到画布
      });
    })();
  }, [url, fileList, pixel, onFinish]);

  return <canvas id='canvas' width={width} height={height} />;
}

export default forwardRef(Generate);
