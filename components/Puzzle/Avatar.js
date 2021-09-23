import { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { generateBlobURL } from './utils';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default function Avatar({ onChange }) {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');

  const customRequest = e => {
    e.onSuccess();
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange = info => {
    const isJpgOrPng = info.file.type === 'image/jpeg' || info.file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只支持图片格式');
      info.fileList.pop();
      return;
    }

    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      /* getBase64(info.file.originFileObj, imageUrl => {
				info.file.imageUrl = imageUrl;
				setLoading(false);
				setUrl(imageUrl);
			}); */
      const blobURL = generateBlobURL(info.file.originFileObj);
      info.file.imageUrl = blobURL;
      setLoading(false);
      setUrl(blobURL);
    }
    onChange(info);
  };

  return (
    <Upload name='avatar' listType='picture-card' className='interest-puzzle-picture' showUploadList={false} onChange={handleChange} customRequest={customRequest}>
      {url ? (
        <img
          src={url}
          alt='avatar'
          style={{ width: '100%' }}
          onLoad={e => {
            const { width, height, classList } = e.target;
            if (width > height) {
              classList.add('object-fit');
            } else {
              classList.remove('object-fit');
            }
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
}
