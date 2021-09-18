import { useRouter } from 'next/router';
import classnames from 'classnames';
import { LinkOutlined } from '@ant-design/icons';

export default function Header({ routes }) {
  const router = useRouter();
  const currentPath = router.route;

  return (
    <div className='interest-header'>
      <span onClick={() => router.push('/')} className='interest-header__logo'>
        Interest
      </span>
      <div className='interest-header__navigator'>
        {routes.map((route, idx) => {
          if (route.out)
            return (
              <a href={route.link} key={idx} target='_blank' className='interest-header__navigator-item' rel='noreferrer'>
                {route.name} <LinkOutlined />
              </a>
            );
          return (
            <span key={idx} onClick={() => router.push(route.link)} className={classnames('interest-header__navigator-item', { 'interest-header__navigator-item--active': currentPath.includes(route.link) })}>
              {route.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
