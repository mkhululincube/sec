import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const CitizenItem = () => {
    return (
        <Card
        hoverable
        style={{ width: 240, borderRadius: "20px" }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    );
};

export default CitizenItem;