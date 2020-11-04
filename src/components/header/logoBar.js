import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Space, Col, Row } from 'antd';
import globalstyle from '../../style.module.css';
import styles from './header.module.css';
import ScreenSize from '../settings/screenSize';
import logo from '../../assets/img/securrency-logo.png'

const LogoBar = () => {
const width = ScreenSize();

return (
 <div className={styles.logoBar}>  
<div  className={globalstyle.container}>
<Space direction="vertical" size="large">
<Row>
{ (width > 700) ? 
<Col xs={0} sm={8} md={10}>
    <Link to="/"><img className={styles.logoBarLogo} src={logo} /></Link>
</Col> : null }
<Col xs={24} sm={16} md={10}>
g
</Col>
</Row>
</Space>
</div>
</div>
);
};

export default LogoBar;
