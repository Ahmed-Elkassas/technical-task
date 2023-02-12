import { Layout, Col, Row, Typography } from "antd";
import { cards } from "../../constants/data.js";
import { CardPillar } from "../card/CardPillar";

const { Content } = Layout;
const {Title} = Typography

import "./home.css";

export const Home = () => {
  return (
    <Content style={{paddingInline: '50px'}}>
        <Title>Support</Title>
      <div className="grid__Container">
        {cards.map((item) => (
          <CardPillar
            key={item.background}
            img={item.headImg}
            title={item.title}
          >
            {item.title}
          </CardPillar>
        ))}
      </div>
    </Content>
  );
};
