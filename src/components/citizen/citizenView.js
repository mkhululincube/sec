import React from 'react';
import { Col, Row, Divider, Pagination, Skeleton } from 'antd';
import style from './citizen.module.css'
import CitizenItem from './citizenItem';
import globalstyle from '../../style.module.css'

const CitizenView = (props) => {
    const citizensList = props.citizens;

return (
<div className={style.citizensPageContainer}>
<div className={globalstyle.container}>
<div className={style.citizensListContainer}>
<Divider>List of citizens</Divider>
<div className={style.citizensHeader}>

<Row>
<Col md={1} xs={5}></Col>
<Col md={5} xs={5}>Name</Col>
<Col md={5} xs={5}>Age</Col>
<Col md={5} xs={5}>City</Col>
<Col md={5} xs={5}></Col>
{/* <Col md={5} xs={5}>{citizenItem.returnValues.city}</Col> */}
</Row>
 
</div>
{
 citizensList.map((citizenItem)=>(<CitizenItem key={citizenItem.returnValues.id} citizenItem={citizenItem} />))
}

<Pagination defaultCurrent={1} total={50} /> 
</div>
</div>
</div>

);
};

export default CitizenView;