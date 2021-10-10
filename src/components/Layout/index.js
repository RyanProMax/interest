import Header from '../Header';

export default function Layout({ children, ...rest }) {
  return (
    <>
      <Header {...rest} />
      {children}
      <div style={{ height: 20 }}></div>
    </>
  );
}
