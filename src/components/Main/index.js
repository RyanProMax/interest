import classnames from 'classnames';

export default function Main({
  children,
  className,
  title,
  description,
  isMobile
}) {
  return (
    <div
      className={classnames(
        'app-content',
        {
          'app-content--mobile': isMobile
        },
        className
      )}
    >
      {title && <h1 className="app-content__title">{title}</h1>}
      <ul className="app-content__description">
        {description &&
          description.length &&
          description.map(({ val, style }, i) => (
            <li key={i} style={style} className="app-content__description-item">
              {val}
            </li>
          ))}
      </ul>
      {children}
    </div>
  );
}
