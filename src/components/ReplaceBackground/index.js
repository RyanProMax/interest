import Main from '../Main';
import { useState, useCallback, useEffect, useRef } from 'react';
import { CompactPicker } from 'react-color';
import { Form, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { getImageData, useKmeans, toBase64 } from './utils';
import classnames from 'classnames';

const description = [{ val: '证件照换底色。' }, { val: '* 基于 k-means 算法。' }, { val: '* 纯在线转换，无需上传至后台，请放心使用。' }];

export default function ReplaceBackground(props) {
  const [form] = Form.useForm();
  const { Dragger } = Upload;
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(false);
  const imageInfo = useRef({});
  const backgroundRef = useRef([]);

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

  const onValuesChange = changeValues => {
    try {
      if (changeValues.color) {
        setLoading(true);
        const { r, g, b, a } = changeValues.color.rgb;
        const { imageData, width, height } = imageInfo.current;
        const { clusterInd } = backgroundRef.current;
        clusterInd.forEach(i => {
          imageData[i] = [~~r, ~~g, ~~b, ~~(a * 255)];
        });
        setPreview(toBase64(imageData, width, height));
        setLoading(false);
      }
    } catch (e) {
      message.error(e);
    }
  };

  const analyseImage = useCallback(async () => {
    try {
      if (image) {
        setLoading(true);
        const [imageData, width, height] = await getImageData(image);
        imageInfo.current = {
          imageData,
          width,
          height
        };
        const result = await useKmeans(imageData);
        const target = result.find(x => x.clusterInd.includes(0));
        // set default color
        form.setFieldsValue({
          color: { r: ~~target.centroid[0], g: ~~target.centroid[1], b: ~~target.centroid[2], a: (target.centroid[3] / 255).toFixed(2) }
        });
        backgroundRef.current = target;
        setLoading(false);
      }
    } catch (e) {
      message.error(e);
    }
  }, [image]);

  useEffect(() => {
    analyseImage();
  }, [analyseImage]);

  return (
    <Main className='interest-replace-background' title='Replace Background' description={description} {...props}>
      <div className='interest-replace-background__content'>
        <Form name='basic' form={form} initialValues={{}} onValuesChange={onValuesChange} {...layout}>
          <Form.Item
            label='选择证件照'
            name='file'
            valuePropName='file'
            getValueFromEvent={e => {
              return e && e.file;
            }}
            rules={[{ required: true, message: '请选择证件照' }]}
          >
            {image ? (
              <img src={image} className='interest-replace-background__preview' alt='选择证件照' />
            ) : (
              <Dragger {...uploadProps}>
                <p className='ant-upload-drag-icon'>
                  <InboxOutlined />
                </p>
                <p className='ant-upload-text'>点击或拖拽文件至此区域</p>
              </Dragger>
            )}
          </Form.Item>
          {image && (
            <Form.Item label='选择底色' name='color' valuePropName='color'>
              <CompactPicker />
            </Form.Item>
          )}
          {preview && (
            <Form.Item label='预览'>
              <div
                className={classnames('interest-replace-background__preview-wrapper', {
                  'interest-replace-background__preview-wrapper--loading': loading
                })}
              >
                <img src={preview} className='interest-replace-background__preview' alt='证件照预览' />
              </div>
            </Form.Item>
          )}
        </Form>
      </div>
    </Main>
  );
}
