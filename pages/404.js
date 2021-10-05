import { Result, Button } from 'antd';

export default function NotFind({ router }) {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => {
            router.push('/');
          }}
        >
          Back Home
        </Button>
      }
    />
  );
}
