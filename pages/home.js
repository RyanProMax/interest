import { BreakText } from 'noteco';
import classnames from 'classnames';

export default function Home({ isNarrow, router }) {
  return (
    <div className={classnames('home', { 'home--mobile': isNarrow })}>
      <main className="home-main">
        <BreakText
          onClick={() => {
            router.push('/example');
          }}
          text="Interest"
          className="home-main__title"
        />
      </main>

      <footer className="home-footer">
        <p>
          Copyright © 2021 by Ryan
          <span style={{ margin: '0 6px' }}>|</span>
          Powered by{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </p>
        <a
          className="home-footer__icp"
          href="https://beian.miit.gov.cn"
          target="__blank"
        >
          粤ICP备2021093548号
        </a>
      </footer>
    </div>
  );
}
