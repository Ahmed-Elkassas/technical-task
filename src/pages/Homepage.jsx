import { Layout, Space } from "antd";
import { Navbar } from "../components/navbar/Navbar";
import { Home } from "../components/home/Home";
import { Footer } from "../components/footer/Footer";

export const Homepage = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Navbar />
        <Home />
        <Footer />
      </Layout>
    </Space>
  );
};
