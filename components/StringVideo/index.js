import { useRef, useState } from 'react';
import { useEffect } from 'react';
import Main from '../Main';

const description = [
  { val: 'JavaScript 输出字符画视频。' },
  { val: '* 示例：Bad Apple' }
];

const fillList = ['#', '*', '+', '"', '　'];
const gap = 12;
let height = 0;

export default function StringVideo(props) {
  const { isMobile } = props;

  const [width, setWidth] = useState(500);

  useEffect(() => {
    if (isMobile && width === 500) {
      setWidth(300);
    } else if (!isMobile && width === 300) {
      setWidth(500);
    }
  }, [width, isMobile]);

  const isInited = useRef(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const render = () => {
      console.log('render');
      // init canvas
      if (!isInited.current) {
        const { offsetHeight } = video;
        height = offsetHeight;
        canvas.setAttribute('height', height);
        isInited.current = true;
      }

      const ctx = canvas.getContext('2d');
      if (!video || !canvas || !ctx) return;

      // read video frame
      ctx.drawImage(video, 0, 0, width, height);
      const imgData = ctx.getImageData(0, 0, width, height).data;
      ctx.clearRect(0, 0, width, height);
      ctx.font = gap + 'px Verdana';
      for (let h = 0; h < height; h += gap) {
        for (let w = 0; w < width; w += gap) {
          const position = (width * h + w) * 4;
          const r = imgData[position],
            g = imgData[position + 1],
            b = imgData[position + 2];
          // calculate gray
          const gray = (r * 30 + g * 59 + b * 11 + 50) / 100;
          const i = Math.min(
            fillList.length - 1,
            parseInt(gray / (255 / fillList.length))
          );
          // render
          ctx.fillText(fillList[i], w, h);
        }
      }
      timerRef.current = requestAnimationFrame(render);
    };

    const stopRender = () => {
      const timer = timerRef.current;
      if (!timer) return;
      cancelAnimationFrame(timer);
    };

    video.addEventListener('play', render);
    video.addEventListener('pause', stopRender);
    video.addEventListener('ended', stopRender);

    return () => {
      stopRender();
      video.removeEventListener('play', render);
      video.removeEventListener('pause', stopRender);
      video.removeEventListener('ended', stopRender);
    };
  }, [width]);

  return (
    <Main
      className="interest-string-video"
      title="String Video"
      description={description}
      {...props}
    >
      <div className="interest-string-video__content">
        <video
          ref={videoRef}
          src="/interest/videos/01.mp4"
          style={{ width: width }}
          controls="controls"
        ></video>
        <canvas
          ref={canvasRef}
          width={width}
          className="interest-string-video__canvas"
        />
      </div>
    </Main>
  );
}
