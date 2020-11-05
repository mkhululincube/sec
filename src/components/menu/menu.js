import React from 'react';
import { Row, Col } from 'antd';
import style from './menu.module.css';
import {
    Link,
    useRouteMatch
  } from "react-router-dom";

const Menu = () => {
    let { url } = useRouteMatch();
return (
<>
<Row gutter={16}>
<Col md={4} xs={6}> 
<Link to={`${url}/viewCitizen`}>
<div className={style.menuItem}>
Citizens
</div>
</Link>
</Col> 
<Col md={4} xs={6}> 
<Link to={`${url}/addCitizen`}>
<div className={style.menuItem}>
Citizens
</div>
</Link>
</Col> 
</Row>           
</>
);
};

export default Menu;