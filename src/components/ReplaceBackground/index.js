import Main from '../Main';
import { useState, useCallback, useEffect } from 'react';
import { Form, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { getImageData, useKmeans } from './utils';

const description = [{ val: '证件照换底色。' }, { val: '* 基于 k-means 算法。' }, { val: '* 纯在线转换，无需上传至后台，请放心使用。' }];

export default function ReplaceBackground(props) {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const [image, setImage] = useState('');

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21, offset: 0 },
    labelAlign: 'left'
  };

  const uploadProps = {
    name: 'file',
    maxCount: 1,
    showUploadList: false,
    onChange({ file }) {
      const { status } = file;
      if (status === 'done') {
        const url = window.URL.createObjectURL(file.originFileObj);
        setImage(url);
      } else if (status === 'error') {
        message.error(`${file.name} file upload failed.`);
      }
    },
    customRequest: e => {
      e.onSuccess();
    }
  };

  const onFinish = () => {};

  const analyseImage = useCallback(async () => {
    try {
      if (image) {
        const imageData = await getImageData(image);
        const result = await useKmeans(imageData);
        console.log(result);
      }
    } catch (e) {
      message.error(e);
    }
  }, [image]);

  useEffect(() => {
    analyseImage();
  }, [analyseImage]);

  return (
    <Main className="interest-replace-background" title="Replace Background" description={description} {...props}>
      <div className="interest-replace-background__content">
        <Form name="basic" form={form} initialValues={{}} onFinish={onFinish} {...layout}>
          <Form.Item
            label="选择证件照"
            name="file"
            valuePropName="file"
            getValueFromEvent={e => {
              return e && e.file;
            }}
            rules={[{ required: true, message: '请选择证件照' }]}
          >
            {image ? (
              <img src={image} className="interest-replace-background__preview" alt="证件照预览" />
            ) : (
              <Dragger {...uploadProps}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或拖拽文件至此区域</p>
              </Dragger>
            )}
          </Form.Item>
        </Form>
      </div>
    </Main>
  );
}
