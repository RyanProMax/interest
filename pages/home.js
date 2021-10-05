import { BreakText } from 'noteco';
import classnames from 'classnames';

export default function Home({ isMobile, router }) {
  return (
    <div className={classnames('home', { 'home--mobile': isMobile })}>
      <main className="home-main">
        <BreakText
          onClick={() => {
            router.push('/case');
          }}
          text="Interest"
          className="home-main__title"
        />
      </main>

      <footer className="home-footer">
        <p>Copyright © 2021 by Ryan</p>
        <p>
          Powered by{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </p>
      </footer>
    </div>
  );
}
