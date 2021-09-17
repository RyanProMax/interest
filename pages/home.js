import styles from '../styles/home.module.less';

export default function Home() {
  return (
    <div className={styles.home}>
      <main className={styles['home-main']}>
        <h1 className={styles['home-main__title']}>Interest</h1>
      </main>

      <footer className={styles['home-footer']}>
        <p>Copyright © 2021 by Ryan</p>
        <p>
          Powered by{' '}
          <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
            Next.js
          </a>
        </p>
      </footer>
    </div>
  );
}
