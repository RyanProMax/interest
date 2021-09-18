import Header from '../Header';

const routes = [
  { name: 'Case', link: '/case' },
  { name: 'About', link: '/about' },
  { name: 'Github', link: 'https://github.com/Ryan-zyy/interest', out: true }
];

export default function Layout({ children }) {
  return (
    <>
      <Header routes={routes} />
      {children}
    </>
  );
}
