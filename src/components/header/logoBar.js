import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Space, Col, Row } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import globalstyle from '../../style.module.css';
import styles from './header.module.css';
import ScreenSize from '../settings/screenSize';
import logo from '../../assets/img/securrency-logo.png'
import SearchBar from '../search/searchBar';

const LogoBar = () => {
const width = ScreenSize();

return (
 <div className={styles.logoBar}>  
<div  className={globalstyle.container}>
<Row>
 <Col xs={12} sm={18} md={20}>
    <Link to="/"><img className={styles.logoBarLogo} src={logo} /></Link>
</Col>  
<Col xs={12} sm={8} md={4}>
<Link to="/addCitizen"><span className={globalstyle.button}>Add Citizen <PlusCircleOutlined /></span></Link> 
</Col>
</Row>
</div>
</div>
);
};

export default LogoBar;
