import { Button, Col, Row } from "antd";
import { useGlobalContext } from "../../store/CartProvider";
import { ImgContainer } from "../navbar/navbarStyle";
import { Fragment } from "react";
import { DeleteFilled } from "@ant-design/icons";

export const ShopCart = () => {
  const { items, removeItem } = useGlobalContext();

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
    </Fragment>
  );
};
