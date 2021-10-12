import { MenuUnfoldOutlined, LinkOutlined } from '@ant-design/icons';
import { useState } from 'react';
import classnames from 'classnames';

function MobileMenu({ ROUTES, className, router, currentPath }) {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(expand => !expand);
  };

  const handleNavigate = route => e => {
    router.push(route.link);
  };

  return (
    <>
      <MenuUnfoldOutlined className={className} onClick={handleClick} />
      <div
        className={classnames('interest-mobile-menu__mask', {
          'interest-mobile-menu__mask--active': expand
        })}
        onClick={handleClick}
      ></div>
      <div
        className={classnames('interest-mobile-menu__content', {
          'interest-mobile-menu__content--active': expand
        })}
        onClick={handleClick}
      >
        <span onClick={handleNavigate({ link: '/' })} className='interest-mobile-menu__title'>
          Ryan&#39;s Blog
        </span>
        {ROUTES.map((route, idx) => {
          if (route.out)
            return (
              <a href={route.link} key={idx} target='_blank' className='interest-mobile-menu__content-item' rel='noreferrer'>
                {route.name} <LinkOutlined />
              </a>
            );
          return (
            <span
              key={idx}
              onClick={handleNavigate(route)}
              className={classnames('interest-mobile-menu__content-item', {
                'interest-mobile-menu__content-item--active': currentPath.includes(route.link)
              })}
            >
              {route.name}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default MobileMenu;
