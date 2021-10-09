import Card from '../src/components/Card';
import { basePath } from '../settings';
import { Row, Col } from 'antd';

export default function Example({ isMobile }) {
  const LIST = [
    {
      name: 'Puzzle',
      imgSrc: `${basePath}/images/02.jpg`,
      path: '/example/puzzle'
    },
    {
      name: 'String Video',
      imgSrc: `${basePath}/images/03.jpg`,
      path: '/example/string-video'
    },
    {
      name: 'Generate GIF',
      imgSrc: `${basePath}/images/03.jpg`,
      path: '/example/generate-gif'
    }
  ];

  return (
    <div className='interest-example'>
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
