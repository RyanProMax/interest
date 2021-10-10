import Card from '../src/components/Card';
import { basePath } from '../settings';
import { Row, Col } from 'antd';

export default function Example({ isMobile }) {
  const LIST = [
    {
      name: 'Puzzle',
      imgSrc: `${basePath}/images/puzzle.jpg`,
      path: '/example/puzzle'
    },
    {
      name: 'String Video',
      imgSrc: `${basePath}/images/string-video.jpg`,
      path: '/example/string-video'
    },
    {
      name: 'Generate GIF',
      imgSrc: `${basePath}/images/generate-gif.gif`,
      path: '/example/generate-gif'
    },
    {
      name: 'Mini Cooper',
      imgSrc: `${basePath}/images/mini-cooper.png`,
      path: '/example/mini-cooper'
    }
  ];

  return (
    <div className="interest-example">
      <Row gutter={[16, 16]} style={{ maxWidth: 1280, width: '100%' }}>
        {LIST.map((p, i) => (
          <Col key={i} xs={24} md={12} lg={8} xl={6}>
            <Card {...p} isMobile={isMobile} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
