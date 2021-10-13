import { OutlineAnimation } from 'noteco';

export function HomeButton({ router }) {
  return (
    <div
      className="interest-home__button-wrapper"
      onClick={() => {
        router.push('/example');
      }}
    >
      <OutlineAnimation width={320} height={60} className="interest-home__button-outline" rectStyle={{ stroke: '#fff', strokeWidth: '2px' }}>
        <button className="interest-home__button">世界也在看着你</button>
      </OutlineAnimation>
    </div>
  );
}
