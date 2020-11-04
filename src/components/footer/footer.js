import React from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.css';
import globalstyle from '../../style.module.css';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import "antd/dist/antd.css";

import logo from '../../assets/img/securrency-white.png';

const Footer = () => {
return (
<div>
<div className={style.extra}>

<div className={style.footer2}>
<div  className={globalstyle.container}>   
<Row>
<Col sm={20} xs={17}>
<img src={logo} width="100px"/>
</Col>
<Col className="pull-right" sm={4} xs={7}>
<div><a title="facebook" href="https://www.facebook.com/ecosazdotcom"><TwitterOutlined style={{color: "#fff"}} /></a>  &nbsp;  &nbsp; 
<a title="twitter" href="https://twitter.com/ecosaz"><FacebookOutlined style={{color: "#fff"}}  /></a>   &nbsp;  &nbsp;   
<a title="linkedin" href="https://www.linkedin.com/in/ecosaz-dotcom-996949146/"><InstagramOutlined style={{color: "#fff"}}  /> </a>   &nbsp;   &nbsp;
<a title="linkedin" href="https://www.instagram.com/"><YoutubeOutlined style={{color: "#fff"}}  /> </a>   &nbsp;   &nbsp;

</div>               
 </Col>
</Row> 
</div>    
</div>    
</div>    
</div>
);
};

export default Footer;