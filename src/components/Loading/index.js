import { Progress } from 'antd';
import classnames from 'classnames';

export default function Loading({ text, progress }) {
  return (
    <div className={classnames('interest-loading', { 'interest-loading--hide': progress >= 100 })}>
      {text && <p>{text}</p>}
      <Progress
        showInfo={false}
        className='interest-loading__progress'
        strokeColor={{
          '0%': '#020924',
          '100%': '#108ee9'
        }}
        percent={Math.round(progress)}
      />
    </div>
  );
}
