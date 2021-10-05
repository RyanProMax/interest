import Header from '../Header';

export default function Layout({ children, ...rest }) {
  return (
    <>
      <Header {...rest} />
      {children}
    </>
  );
}
