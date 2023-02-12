import { Card } from 'antd'

const {Meta} = Card

const cardStyle = {
    padding: '1rem'
}

export const CardPillar = ({img, title, children}) => {
  return (
    <Card
    style={cardStyle}
    cover={
      <img
        alt={title}
        src={img}
        style={{height: '200px'}}
      />
    }
  >
    {children}
  </Card>
  )
}
