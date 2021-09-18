import { useState } from 'react';
import { Upload, message, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { generateBlobURL } from './utils';

function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

const uploadButton = (
	<div>
		<PlusOutlined />
		<div style={{ marginTop: 8 }}>Upload</div>
	</div>
);

export default function PictureWall({ onChange }) {
	const [fileList, setFileList] = useState([]);
	const [preview, setPreview] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');

	const handlePreview = async file => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreview(file.url || file.preview);
		setPreviewTitle(
			file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
		);
	};

	const handleCancel = () => setPreview('');

	const handleChange = ({ file, fileList }) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			message.error('只支持图片格式');
			fileList.pop();
			return;
		}

		fileList.forEach(file => {
			file.blobURL = generateBlobURL(file.originFileObj);
		});
		onChange({ file, fileList });
		setFileList(fileList);
	};

	return (
		<>
			<Upload
				listType="picture-card"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
				multiple
			>
				{/* {fileList.length >= 8 ? null : uploadButton} */}
				{uploadButton}
			</Upload>
			<Modal
				visible={!!preview}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt="example" style={{ width: '100%' }} src={preview} />
			</Modal>
		</>
	);
}
