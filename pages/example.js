import Card from '../src/components/Card';
import { domain } from '../settings';
import { Row, Col } from 'antd';

export default function Example({ isMobile }) {
  const LIST = [
    {
      name: 'Puzzle',
      imgSrc: `${domain}/images/puzzle.jpg`,
      path: '/example/puzzle'
    },
    // {
    //   name: 'String Video',
    //   imgSrc: `${domain}/images/string-video.gif`,
    //   path: '/example/string-video'
    // },
    {
      name: 'Generate GIF',
      imgSrc: `${domain}/images/generate-gif.gif`,
      path: '/example/generate-gif'
    },
    {
      name: 'Mini Cooper',
      imgSrc: `${domain}/images/mini-cooper.png`,
      path: '/example/mini-cooper'
    }
  ];

  return (
    <div className='interest-example'>
      <Row gutter={[16, 16]} style={{ maxWidth: 1280, width: '100%' }}>
        {LIST.map((p, i) => (
          <Col key={i} xs={24} sm={12} lg={8} xl={6}>
            <Card {...p} isMobile={isMobile} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
