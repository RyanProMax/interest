import Main from '../Main';
import { createGIF } from 'gifshot';
import { useState, useRef } from 'react';
import { Form, Button, Slider, message, Progress } from 'antd';
import { SyncOutlined, ClearOutlined } from '@ant-design/icons';
import Upload from './Upload';
import { debounce } from '../../utils';
import MobileEmpty from '../MobileEmpty';

const description = [{ val: '上传视频生成 GIF。' }, { val: '* 依赖库：gifshot（https://github.com/yahoo/gifshot）' }, { val: '* 暂不支持移动端使用。' }];

function screenShot(url, currentTime) {
  return new Promise(resolve => {
    const video = document.createElement('video');
    video.src = url;
    video.controls = true;
    video.currentTime = currentTime;
    video.oncanplay = () => {
      console.log('screenShot, onCanPlay');
      const canvas = document.createElement('canvas');
      canvas.width = 320;
      canvas.height = 180;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

      resolve(canvas.toDataURL('image/png'));
    };
  });
}

export default function GenerateGIF(props) {
  const [form] = Form.useForm();
  const [videoUrl, setVideoUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ret, setRet] = useState('');
  const [progress, setProgress] = useState(0);

  if (props.isMobile) {
    return <MobileEmpty {...props} />;
  }

  const handleUpload = ({ file }) => {
    const url = window.URL.createObjectURL(file.originFileObj);
    setVideoUrl(url);
    initVideoMeta(url);
  };

  const initVideoMeta = url => {
    const video = document.createElement('video');
    video.src = url;
    video.addEventListener('canplay', async e => {
      const _duration = ~~video.duration;
      setDuration(_duration);
      form.setFieldsValue({
        fragment: [0, _duration]
      });
      setPreview(await Promise.all([screenShot(url, 0), screenShot(url, _duration)]));
    });
  };

  const handleChange = async changedValues => {
    // console.log('handleChange: ', changedValues);
    if (changedValues.fragment) {
      const [startTime, stopTime] = changedValues.fragment;
      setPreview(await Promise.all([screenShot(videoUrl, startTime), screenShot(videoUrl, stopTime)]));
    }
  };

  const decounceChange = debounce(handleChange, 500);

  const handleReset = () => {
    // form.resetFields();
    setVideoUrl('');
    setDuration(0);
    setPreview([]);
    setRet('');
    setProgress(0);
  };

  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20, offset: 1 },
    labelAlign: 'left'
  };

  const onFinish = values => {
    console.log('onFinish: ', values);
    setLoading(true);
    const [startTime, stopTime] = values.fragment;

    createGIF(
      {
        gifWidth: 200,
        gifHeight: 200,
        video: [videoUrl],
        numWorkers: 2,
        numFrames: 1000,
        offset: startTime,
        numFrames: 10 * (stopTime - startTime),
        progressCallback: captureProgress => {
          setProgress(Math.round(captureProgress * 100));
        }
      },
      obj => {
        const { error, image } = obj;
        if (error) {
          message.warning(error);
          return;
        }
        setRet(image);
        setLoading(false);
      }
    );
  };

  return (
    <Main className='interest-generate-gif' title='Generate GIF' description={description} {...props}>
      <div className='interest-generate-gif__content'>
        <Form name='basic' form={form} initialValues={{}} onFinish={onFinish} {...layout} onValuesChange={decounceChange}>
          <Form.Item
            label='上传视频'
            name='file'
            valuePropName='file'
            getValueFromEvent={e => {
              console.log('getValueFromEvent: ', e);
              return e && e.file;
            }}
            rules={[{ required: true, message: '请上传视频' }]}
          >
            <Upload onFinish={handleUpload} handleReset={handleReset} />
          </Form.Item>

          {videoUrl && (
            <Form.Item label='视频预览'>
              <video src={videoUrl} controls width={640} height={360} />
            </Form.Item>
          )}

          <Form.Item label='截取视频' name='fragment' rules={[{ required: true, message: '请选择拼图单元尺寸' }]}>
            <Slider
              disabled={!duration}
              range
              max={duration}
              tipFormatter={v => {
                let ret = '';
                if (v > 60) {
                  ret += `${~~(v / 60)}min`;
                  v %= 60;
                }
                ret += `${v}s`;
                return ret;
              }}
            />
          </Form.Item>
          {preview[0] && (
            <Form.Item label='开始帧' {...layout}>
              <img src={preview[0]} alt='preview' />
            </Form.Item>
          )}

          {preview[1] && (
            <Form.Item label='结束帧' {...layout}>
              <img src={preview[1]} alt='preview' />
            </Form.Item>
          )}

          {loading && (
            <Form.Item label='生成中' {...layout}>
              <Progress percent={progress} />
            </Form.Item>
          )}

          {ret && (
            <Form.Item label='GIF' {...layout}>
              <img src={ret} alt='result' />
            </Form.Item>
          )}

          <Form.Item wrapperCol={{ span: 20, offset: 4 }}>
            <Button loading={loading} icon={<SyncOutlined />} type='primary' htmlType='submit'>
              Generate
            </Button>
            {!loading && (
              <Button
                onClick={() => {
                  form.resetFields();
                  handleReset();
                }}
                icon={<ClearOutlined />}
                style={{ marginLeft: 20 }}
              >
                Reset
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </Main>
  );
}
