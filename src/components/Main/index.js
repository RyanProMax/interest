import classnames from 'classnames';
import { forwardRef } from 'react';
import { Spin, Progress } from 'antd';
import { useState, useImperativeHandle } from 'react';

function Main({ children, className, title, description, isNarrow }, ref) {
  const [process, setProcess] = useState(0);

  const handleProcess = process => {
    setProcess(process);
  };

  useImperativeHandle(ref, () => ({
    handleProcess: handleProcess
  }));

  return (
    <div
      className={classnames(
        'app-content',
        {
          'app-content--narrow': isNarrow
        },
        className
      )}
      ref={ref}
    >
      {title && <h1 className='app-content__title'>{title}</h1>}
      <ul className='app-content__description'>
        {description &&
          description.length &&
          description.map(({ val, style }, i) => (
            <li key={i} style={style} className='app-content__description-item'>
              {val}
            </li>
          ))}
      </ul>
      {children}
      <div className={classnames('interest-loading', 'interest-content-loading', { 'interest-loading--hide': process === 0 || process >= 100 })}>
        <Spin />
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068'
          }}
          percent={process}
          className='interest-loading__progress'
        />
      </div>
    </div>
  );
}

export default forwardRef(Main);
