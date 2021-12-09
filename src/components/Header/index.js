import classnames from 'classnames';
import { LinkOutlined } from '@ant-design/icons';
import { AnimateLineText } from 'noteco';
import MobileMenu from '../MobileMenu';

const ROUTES = [
  { name: 'Example', link: '/example' },
  // { name: 'About', link: '/about' },
  {
    name: 'My Component',
    link: 'https://RyanProMax.github.io/noteco/animate-component',
    out: true
  },
  { name: 'Github', link: 'https://github.com/RyanProMax/interest', out: true }
];

function Header({ isNarrow, router }) {
  const currentPath = router.route;

  return (
    <div
      className={classnames('interest-header', {
        'interest-header__mobile': isNarrow
      })}
    >
      <div onClick={() => router.push('/')} className="interest-header__logo">
        <AnimateLineText
          id="interest-header__logo"
          width="200"
          height="70"
          viewBox="0 0 200 70"
          strokeWidth="1px"
          content={[
            { value: 'Interest', x: '50%', y: '75%', style: { fontSize: 42 } }
          ]}
        />
      </div>
      {isNarrow ? (
        <MobileMenu
          ROUTES={ROUTES}
          router={router}
          currentPath={currentPath}
          className="interest-header__mobile-menu"
        />
      ) : (
        <div className="interest-header__navigator">
          {ROUTES.map((route, idx) => {
            if (route.out)
              return (
                <a
                  href={route.link}
                  key={idx}
                  target="_blank"
                  className="interest-header__navigator-item"
                  rel="noreferrer"
                >
                  {route.name} <LinkOutlined />
                </a>
              );
            return (
              <span
                key={idx}
                onClick={() => router.push(route.link)}
                className={classnames('interest-header__navigator-item', {
                  'interest-header__navigator-item--active':
                    currentPath.includes(route.link)
                })}
              >
                {route.name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Header;
