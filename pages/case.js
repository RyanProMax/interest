import Card from '../src/components/Card';
import { basePath } from '../settings';
import { Row, Col } from 'antd';

export default function Case({ isMobile }) {
  const LIST = [
    {
      name: 'Puzzle',
      imgSrc: `${basePath}/images/02.jpg`,
      path: '/case/puzzle'
    },
    {
      name: 'String Video',
      imgSrc: `${basePath}/images/03.jpg`,
      path: '/case/string-video'
    },
    {
      name: 'Generate GIF',
      imgSrc: `${basePath}/images/03.jpg`,
      path: '/case/generate-gif'
    }
  ];

  return (
    <div className='interest-case'>
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
