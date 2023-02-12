import { Button, Layout, Space, Typography, Avatar, Tooltip, Drawer } from "antd";
import {
  ShoppingCartOutlined,
  UngroupOutlined,
  UserOutlined,
} from "@ant-design/icons";

import ava1 from "/images/avatar1.png";
import ava2 from "/images/avatar2.png";
import ava3 from "/images/avatar3.png";
import { Fragment, useState } from "react";

const { Header } = Layout;
const { Title, Text } = Typography;

const headerStyle = {
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px 2px 5px -1px rgba(217,217,217,1)",
  lineHeight: "unset",
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Header style={headerStyle}>
        <Space direction="vertical" size={2}>
          <Title level={5} style={{ margin: "0" }}>
            Welcome to iCloudReady!
          </Title>
          <Text>
            You have started your <Text strong>30 day trial</Text>
          </Text>
        </Space>
        <div>
          <Avatar.Group
            maxCount={3}
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src={ava1} />
            <Avatar src={ava2} />
            <Avatar src={ava3} />
            <Tooltip title="Ant User" placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar src={ava1} />
            <Avatar src={ava2} />
          </Avatar.Group>
        </div>
        <Space direction="horizontal" size="middle">
          <Button
            style={{ background: "#E1ECF9" }}
            shape="circle"
            icon={<ShoppingCartOutlined />}
            size="default"
            onClick={showDrawer}
          />
          <Button
            style={{ background: "#E1ECF9" }}
            shape="circle"
            icon={<UngroupOutlined />}
            size="default"
          />
        </Space>
      </Header>
      <Drawer title="Your Cart" placement="right" onClose={onClose} open={open}>
       Cart is Empty
      </Drawer>
    </Fragment>
  );
};
