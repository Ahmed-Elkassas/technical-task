import { Card } from 'antd'

const cardStyle = {
    minHeight: '362px',
    width: '271px',
    borderRadius: '10px'
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
