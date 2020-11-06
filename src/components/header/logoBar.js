import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Col, Row } from 'antd';
import { QuestionCircleOutlined, UsergroupAddOutlined } from '@ant-design/icons';

import globalstyle from '../../style.module.css';
import styles from './header.module.css';
import ScreenSize from '../settings/screenSize';
import logo from '../../assets/img/securrency-logo.png'

const LogoBar = () => {
const width = ScreenSize();

return (
 <div className={styles.logoBar}>  
<div  className={globalstyle.container}>
<Row gutter={[24]}>
 <Col xs={8} sm={15} md={18}>
    <Link to="/home"><img className={styles.logoBarLogo} src={logo} /></Link>
</Col>  
<Col xs={8} sm={5} md={3}>
<Link to="/learnMore"><span className={styles.menuButton}>Learn more <QuestionCircleOutlined /></span></Link> 
</Col>
<Col xs={8} sm={5} md={3}>
<Link to="/citizens"><span className={styles.menuButton}> Citizens <UsergroupAddOutlined /></span></Link> 
</Col>
</Row>
</div>
</div>
);
};

export default LogoBar;
