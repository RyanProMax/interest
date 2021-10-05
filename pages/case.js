import Card from '../components/Card';
import { basePath } from '../settings';
import { Row, Col } from 'antd';

export default function Case({ isMobile }) {
  const LIST = [
    {
      name: 'Puzzle',
      imgSrc: `${basePath}/images/02.jpg`,
      path: '/case/puzzle',
      onlyPC: true
    },
    {
      name: 'String Video',
      imgSrc: `${basePath}/images/03.jpg`,
      path: '/case/string-video'
    }
  ];

  return (
    <div className="interest-case">
      <Row gutter={[16, 16]}>
        {LIST.map((props, idx) =>
          isMobile && props.onlyPC ? null : (
            <Col key={idx} xs={24} md={12} lg={8}>
              <Card {...props} />
            </Col>
          )
        )}
      </Row>
    </div>
  );
}
