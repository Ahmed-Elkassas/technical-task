import { Alert, Button, Col, Divider, Row, Space } from "antd";
import { useGlobalContext } from "../../store/CartProvider";
import { ImgContainer } from "../navbar/navbarStyle";
import { Fragment, useState } from "react";
import { DeleteFilled } from "@ant-design/icons";

export const ShopCart = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { items, removeItem, totalAmount } = useGlobalContext();

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  return (
    <Fragment>
      <Row justify="space-between">
        <Col span={8}>Product</Col>
        <Col span={2}>Qtn.</Col>
        <Col span={2}>Remove</Col>
      </Row>
      {items.map((item) => (
        <Row
          key={item.id}
          justify="space-between"
          style={{ margin: "1rem auto", alignItems: "center" }}
        >
          <Col
            span={9}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <ImgContainer>
              <img
                src={item.headImg}
                style={{ width: "100%", height: "100%" }}
              />
            </ImgContainer>
            <p style={{ fontSize: "13px" }}>{item.title}</p>
          </Col>
          <Col span={2}>
            <input
              type="number"
              step="1"
              min="1"
              max="5"
              defaultValue={item.amount}
            />
          </Col>
          <Col span={1}>
            <Button
              icon={<DeleteFilled />}
              shape="default"
              type="text"
              danger
              onClick={cartItemRemoveHandler.bind(null, item.id)}
            />
          </Col>
        </Row>
      ))}
      <Divider style={{ margin: "8px 0px" }} />
      <Space
        direction="horizontal"
        style={{ justifyContent: "space-between", width: "100%", height: '25px' }}
      >
        <p>Subtotal</p>
        <p style={{ color: "#0097C2" }}>{totalAmount} DTSUs</p>
      </Space>
      <Space
        direction="horizontal"
        style={{ justifyContent: "space-between", width: "100%",height: '25px' }}
      >
        <p>New Payment</p>
        <p style={{ color: "#0097C2" }}>No, Inclusive in your package</p>
      </Space>
      <Divider style={{ margin: "10px 0px" }} />
      <Space
        direction="horizontal"
        style={{
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <p>Total Units Consumed</p>
        <p style={{ color: "#0097C2" }}>{totalAmount} DTSUs</p>
      </Space>
      <Button
        type="primary"
        shape="round"
        block
        style={{ marginBottom: ".7rem" }}
        onClick={() => setShowAlert(true)}
      >
        Checkout
      </Button>
      <Button
        type="default"
        shape="round"
        block
        style={{ marginBottom: "1rem" }}
      >
        Back to Run Information
      </Button>
      {showAlert && (
        <Fragment>
          <Alert
            message="Your have made a great chooseLet's Run and be ready for a surprise"
            type="warning"
            closable
          />
          <Alert
            message="Some requests can take a week or moreto be delivered and may be subject to dependency resolutions related to your"
            type="info"
            showIcon
            closable
            style={{marginTop: '10px'}}
          />
        </Fragment>
      )}
    </Fragment>
  );
};
