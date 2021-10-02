import Card from '../components/Card';
import { basePath } from '../settings';

export default function Case() {
  const LIST = [
    {
      name: 'Puzzle',
      imgSrc: `${basePath}/images/02.jpg`,
      path: '/case/puzzle'
    },

    {
      name: 'Pixel Video',
      imgSrc: `${basePath}/images/03.jpg`,
      path: '/case/pixel-video'
    }
  ];

  return (
    <div className="interest-case">
      {LIST.map((props, idx) => (
        <Card key={idx} {...props} style={{ margin: '0 10px 20px 10px' }} />
      ))}
    </div>
  );
}
