import { Upload as AntUpload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function Upload({ onFinish, handleReset, onChange }) {
  const props = {
    maxCount: 1,
    listType: 'picture',
    onChange: e => {
      const { file } = e;
      console.log('onChange:', e);
      if (file.status === 'done') {
        onFinish(e);
        onChange({ file });
      } else if (file.percent === 0) {
        handleReset();
      }
    },
    customRequest: e => {
      console.log('customRequest: ', e);
      e.onSuccess();
    }
  };

  return (
    <AntUpload {...props}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </AntUpload>
  );
}
