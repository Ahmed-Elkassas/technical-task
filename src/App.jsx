import { Layout, Space } from 'antd';
import { Navbar } from './components/navbar/Navbar';

const App = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Navbar />
    </Layout>
  </Space>
  );
}

export default App;




