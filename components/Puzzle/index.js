import { useState, useRef } from 'react';
import Main from '../Main';
import Avatar from './Avatar';
import PictureWall from './PictureWall';
import Size from './Size';
import Generate from './Generate';
import { Form, Button } from 'antd';
import { SyncOutlined, ExportOutlined } from '@ant-design/icons';

export default function Puzzle() {
  const [form, setForm] = useState({});
  const [showCanvas, setShowCanvas] = useState(false);
  const canvasRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const onFinish = values => {
    console.log('onFinish: ', values);
    setForm(values);
    setShowCanvas(true);
    setLoading(true);
  };

  const handleExport = () => {
    canvasRef.current.changeVal(file.name);
  };

  return (
    <Main className='interest-puzzle' title='Puzzle'>
      <Form
        name='basic'
        initialValues={{
          size: 1000,
          pixel: 8
        }}
        onFinish={onFinish}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
      >
        <Form.Item
          valuePropName='file'
          getValueFromEvent={e => {
            return e && e.file;
          }}
          label='目标图片'
          name='file'
          rules={[{ required: true, message: '请选择目标图片' }]}
        >
          <Avatar />
        </Form.Item>

        <Form.Item
          valuePropName='fileList'
          getValueFromEvent={e => {
            return e && e.fileList;
          }}
          label='组合素材'
          name='fileList'
          rules={[{ required: true, message: '请选择组合素材' }]}
        >
          <PictureWall />
        </Form.Item>

        <Form.Item label='画布尺寸' name='size' rules={[{ required: true, message: '请选择画布尺寸' }]}>
          <Size
            marks={{
              800: '800px',
              1000: '1000px',
              1200: '1200px',
              1600: '1600px',
              2000: '2000px'
            }}
            min={800}
            max={2000}
            step={100}
          />
        </Form.Item>

        <Form.Item label='拼图单元' name='pixel' rules={[{ required: true, message: '请选择拼图单元尺寸' }]}>
          <Size
            marks={{
              2: '2px',
              4: '4px',
              8: '8px',
              16: '16px'
            }}
            min={2}
            max={16}
            step={2}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 22, offset: 2 }}>
          <Button loading={loading} icon={<SyncOutlined />} type='primary' htmlType='submit'>
            Generate
          </Button>
          {showCanvas && !loading && (
            <Button loading={loading} onClick={handleExport} icon={<ExportOutlined />} type='primary' style={{ marginLeft: 20 }}>
              Export
            </Button>
          )}
        </Form.Item>

        {showCanvas && (
          <Form.Item label='预览' style={{ marginTop: 50 }}>
            <div className='interest-puzzle__canvas-wrapper'>
              <Generate
                ref={canvasRef}
                width={form.size}
                height={form.size}
                pixel={form.pixel}
                url={form.file.imageUrl}
                fileList={form.fileList}
                export={handleExport}
                onFinish={() => {
                  setLoading(false);
                }}
              />
            </div>
          </Form.Item>
        )}
      </Form>
    </Main>
  );
}
