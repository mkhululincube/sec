import React from 'react';
import { Row, Col } from 'antd';
import style from './menu.module.css';

const Menu = () => {
return (
<>
<Row gutter={16}>
<Col md={4} xs={6}> 
<div className={style.menuItem}>
Citizens
</div>
</Col>
<Col md={4} xs={6}> 
<div className={style.menuItem}>
Citizens
</div>
</Col>
<Col md={4} xs={6}> 
<div className={style.menuItem}>
Citizens
</div>
</Col>
<Col md={4} xs={6}> 
<div className={style.menuItem}>
Citizens
</div>
</Col>
<Col md={4} xs={6}> 
<div className={style.menuItem}>
Citizens
</div>
</Col>
<Col md={4} xs={6}> 
<div className={style.menuItem}>
Citizens
</div>
</Col>
</Row>           
</>
);
};

export default Menu;