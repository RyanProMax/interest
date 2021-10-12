export default function Footer() {
  return (
    <footer className='interest-footer'>
      <p className='interest-footer__content'>
        Copyright © 2021 by Ryan
        <span className='interest-footer__divider'>|</span>
        Powered by{' '}
        <a className='interest-footer__link' href='https://nextjs.org/' target='_blank' rel='noreferrer'>
          Next.js
        </a>
      </p>
      <a className='interest-footer__icp' href='https://beian.miit.gov.cn' target='__blank'>
        粤ICP备2021093548号
      </a>
    </footer>
  );
}
