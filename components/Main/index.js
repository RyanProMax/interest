import classnames from 'classnames';

export default function Main({ children, className, title }) {
	return (
		<div className={classnames('app-content', className)}>
			{title && <h1 className="app-content__title">{title}</h1>}
			{children}
		</div>
	);
}
