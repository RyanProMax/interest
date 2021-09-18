import { useState, useRef } from 'react';
import Main from '../Main';
import Avatar from './Avatar';
import PictureWall from './PictureWall';
import Generate from './Generate';
import { Form, Button } from 'antd';
import { SyncOutlined, ExportOutlined } from '@ant-design/icons';

export default function Puzzle() {
	const [file, setFile] = useState('');
	const [fileList, setFileList] = useState([]);
	const [showCanvas, setShowCanvas] = useState(false);
	const canvasRef = useRef(null);

	const [loading, setLoading] = useState(false);

	const onFinish = values => {
		setFile(values.target);
		setFileList(values.element);
		setShowCanvas(true);
		setLoading(true);
	};

	const handleExport = () => {
		canvasRef.current.changeVal(file.name);
	};

	return (
		<Main className="interest-puzzle" title="Puzzle">
			<Form
				name="basic"
				onFinish={onFinish}
				labelCol={{ span: 2 }}
				wrapperCol={{ span: 22 }}
			>
				<Form.Item
					valuePropName="file"
					getValueFromEvent={e => {
						return e && e.file;
					}}
					label="目标图片"
					name="target"
					rules={[{ required: true, message: '请选择目标图片' }]}
				>
					<Avatar />
				</Form.Item>

				<Form.Item
					valuePropName="fileList"
					getValueFromEvent={e => {
						return e && e.fileList;
					}}
					label="组合素材"
					name="element"
					rules={[{ required: true, message: '请选择组合素材' }]}
				>
					<PictureWall />
				</Form.Item>

				<Form.Item wrapperCol={{ span: 22, offset: 2 }}>
					<Button
						loading={loading}
						icon={<SyncOutlined />}
						type="primary"
						htmlType="submit"
					>
						Generate
					</Button>
					{showCanvas && !loading && (
						<Button
							loading={loading}
							onClick={handleExport}
							icon={<ExportOutlined />}
							type="primary"
							style={{ marginLeft: 20 }}
						>
							Export
						</Button>
					)}
				</Form.Item>

				{showCanvas && (
					<Form.Item label="预览" style={{ marginTop: 50 }}>
						<div className="interest-puzzle__canvas-wrapper">
							<Generate
								ref={canvasRef}
								width={1000}
								height={1000}
								pixel={4}
								url={file.imageUrl}
								fileList={fileList}
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
