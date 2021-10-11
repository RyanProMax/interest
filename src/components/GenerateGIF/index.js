import Main from '../Main';
import { createGIF } from 'gifshot';
import { useState } from 'react';
import { Form, Button, Slider, message, Progress } from 'antd';
import { SyncOutlined, ClearOutlined } from '@ant-design/icons';
import Upload from './Upload';
import { debounce, screenShot, videoToImage } from '../../utils';
import MobileEmpty from '../MobileEmpty';

const description = [{ val: '上传视频生成 GIF。' }, { val: '* 纯在线转换，无需上传至后台，请放心使用。' }, { val: '* 依赖库：gifshot（https://github.com/yahoo/gifshot）' }, { val: '* 暂不支持移动端使用。' }];

export default function GenerateGIF(props) {
  const [form] = Form.useForm();
  const [videoUrl, setVideoUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ret, setRet] = useState('');
  const [progress, setProgress] = useState(0);
  const [size, setSize] = useState([250, 250]);

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
    if (changedValues.fragment) {
      const [startTime, stopTime] = changedValues.fragment;
      setPreview(await Promise.all([screenShot(videoUrl, startTime), screenShot(videoUrl, stopTime)]));
    } else if (changedValues.width) {
      setSize([changedValues.width, size[1]]);
    } else if (changedValues.height) {
      setSize([size[0], changedValues.height]);
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
    handleGenerate(values);
  };

  const handleGenerate = values => {
    setLoading(true);
    ret && setRet('');
    const [startTime, stopTime] = values.fragment;

    createGIF(
      {
        gifWidth: values.width,
        gifHeight: values.height,
        video: [videoUrl],
        numWorkers: 2,
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
        setProgress(0);
        setLoading(false);
      }
    );
  };

  const handleGenerateStringGIF = async () => {
    const TIME_INTERVAL = 100;

    try {
      const values = await form.validateFields();
      setLoading(true);
      ret && setRet('');
      const [startTime, stopTime] = values.fragment;

      const images = await videoToImage({
        src: videoUrl,
        interval: TIME_INTERVAL,
        startTime,
        duration: stopTime - startTime,
        width: values.width,
        height: values.height
      });

      /* const img = document.createElement('img');
      img.src = images[1];
      document.body.appendChild(img); */

      createGIF(
        {
          gifWidth: values.width,
          gifHeight: values.height,
          images,
          numWorkers: 2,
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
          setProgress(0);
          setLoading(false);
        }
      );
    } catch (e) {
      message.warning('请按要求设置内容');
    }
  };

  return (
    <Main className='interest-generate-gif' title='Generate GIF' description={description} {...props}>
      <div className='interest-generate-gif__content'>
        <Form
          name='basic'
          form={form}
          initialValues={{
            width: size[0],
            height: size[1]
          }}
          onFinish={onFinish}
          {...layout}
          onValuesChange={decounceChange}
        >
          <Form.Item
            label='上传视频'
            name='file'
            valuePropName='file'
            getValueFromEvent={e => {
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

          <Form.Item label='GIF 长度' name='width' rules={[{ required: true, message: '请选择 GIF 长度' }]}>
            <Slider
              min={100}
              max={500}
              step={25}
              marks={{
                100: '100px',
                250: '250px',
                500: '500px'
              }}
            />
          </Form.Item>

          <Form.Item label='GIF 高度' name='height' rules={[{ required: true, message: '请选择 GIF 高度' }]}>
            <Slider
              min={100}
              max={500}
              step={25}
              marks={{
                100: '100px',
                250: '250px',
                500: '500px'
              }}
            />
          </Form.Item>

          {preview[0] && (
            <Form.Item label='开始帧' {...layout}>
              <img src={preview[0]} alt='preview' style={{ width: size[0], height: size[1], objectFit: 'cover' }} />
            </Form.Item>
          )}

          {preview[1] && (
            <Form.Item label='结束帧' {...layout}>
              <img src={preview[1]} alt='preview' style={{ width: size[0], height: size[1], objectFit: 'cover' }} />
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
            <Button loading={loading} icon={<SyncOutlined />} type='primary' style={{ marginLeft: 20 }} onClick={handleGenerateStringGIF}>
              Generate String GIF
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
