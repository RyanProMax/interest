import { Empty } from 'antd';

export default function MobileEmpty() {
  return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'暂不支持移动端使用'} style={{ marginTop: 100 }} />;
}
