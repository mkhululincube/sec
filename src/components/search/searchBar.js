import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import Search from './search';
import globalstyle from '../../style.module.css';



const SearchBar = () => {
    return (
<Row gutter={16}>
<Col md={20} xs={6}> 
<Search />
</Col>
<Col md={4} xs={18}>
<Link to="/addCitizen"><span className={globalstyle.button}>Add Citizen <PlusCircleOutlined /></span></Link> 
</Col>


</Row>
);
};

export default SearchBar;