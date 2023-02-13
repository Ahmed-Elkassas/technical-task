import { Button, Layout, Space, Typography } from "antd";
import { cards } from "../../constants/data.js";
import { CardPillar } from "../card/CardPillar";
import diamond from "/diamond.svg";

const { Content } = Layout;
const { Title } = Typography;

import {
  AddToCardBtn,
  CardContainer,
  CardContent,
  CardDescription,
  CardTitle,
  CardValue,
  ActionButtons,
} from "./homeStyle.js";
import { ExportOutlined, PlusOutlined } from "@ant-design/icons";

export const Home = () => {
  return (
    <Content
      style={{
        paddingInline: "50px",
        background:
          "linear-gradient(342.45deg, #97E0F3 -32.65%, #FFFFFF 85.43%)",
      }}
    >
      <Title level={3} style={{ color: "#0097C2", marginTop: "51px" }}>
        Get Support <img src={diamond} alt="icon" />
      </Title>
      <CardContainer>
        {cards.map((item) => (
          <CardPillar
            key={item.background}
            img={item.headImg}
            title={item.title}
          >
            <CardContent background={item.background}>
              <div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.content}</CardDescription>
              </div>
              <ActionButtons>
                <CardValue>{item.value}</CardValue>
                <div style={{display: 'flex', justifyContent: 'space-between', gap: '5px'}}>
                  <AddToCardBtn>
                    <ExportOutlined />
                  </AddToCardBtn>
                  <AddToCardBtn>
                    <PlusOutlined />
                  </AddToCardBtn>
                </div>
              </ActionButtons>
            </CardContent>
          </CardPillar>
        ))}
      </CardContainer>
    </Content>
  );
};
