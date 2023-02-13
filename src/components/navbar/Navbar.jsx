import {
  Button,
  Layout,
  Space,
  Typography,
  Avatar,
  Tooltip,
  Drawer,
  Badge,
  Row,
  Col,
} from "antd";
import {
  DeleteFilled,
  ShoppingCartOutlined,
  UngroupOutlined,
  UserOutlined,
} from "@ant-design/icons";

import ava1 from "/images/avatar1.png";
import ava2 from "/images/avatar2.png";
import ava3 from "/images/avatar3.png";
import emptyCartIcon from '/empty-cart.svg'

import { Fragment, useState } from "react";
import { useGlobalContext } from "../../store/CartProvider";
import { EmptyCart, ImgContainer } from "./navbarStyle";
import { ShopCart } from "../shopcart/ShopCart";

const { Header } = Layout;
const { Title, Text } = Typography;

const headerStyle = {
  backgroundColor: "#fff",
  display: "flex",
  flexWrap: 'wrap',
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px 2px 5px -1px rgba(217,217,217,1)",
  lineHeight: "unset",
  zIndex: "10",
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const { items } = useGlobalContext();

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

 
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
          <Badge count={numberOfCartItems} showZero color="#faad14">
            <Button
              style={{ background: "#E1ECF9" }}
              shape="circle"
              icon={<ShoppingCartOutlined />}
              size="default"
              onClick={showDrawer}
            />
          </Badge>
          <Badge count={2} showZero color="#faad14">
            <Button
              style={{ background: "#E1ECF9" }}
              shape="circle"
              icon={<UngroupOutlined />}
              size="default"
            />
          </Badge>
        </Space>
      </Header>
      <Drawer
        title="Your Run Cart"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {items.length === 0 ? (
          <EmptyCart>
            <img src={emptyCartIcon} alt="empty cart" />
            <p style={{ marginBottom: '0px'}}>Your run cart is empty!</p>
            <p style={{color: 'gray', marginTop: '0px'}}>start add your requests here</p>
          </EmptyCart>
        ) : (
          <ShopCart />
        )}
      </Drawer>
    </Fragment>
  );
};
