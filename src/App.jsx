import { Layout, Space } from "antd";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";

const App = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Navbar />
        <Home />
      </Layout>
    </Space>
  );
};

export default App;
