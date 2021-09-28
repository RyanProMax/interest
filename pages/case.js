import Card from '../components/Card';
import { basePath } from '../settings';

export default function Case() {
  const LIST = [
    {
      name: 'Puzzle',
      imgSrc: `${basePath}/images/02.jpg`,
      path: '/case/puzzle'
    }
  ];

  return (
    <div className='interest-case'>
      {LIST.map((props, idx) => (
        <Card key={idx} {...props} />
      ))}
    </div>
  );
}
