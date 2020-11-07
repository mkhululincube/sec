import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Modal } from 'antd';
import ReadMoreReact from 'read-more-react';
import { UserOutlined } from '@ant-design/icons';
import style from './citizen.module.css';

const CitizenItem = (props) => {
const citizenItem = props.citizenItem;
 


// const [showModal, setShowModal] = useState(false);

// showModal = () => {
//   this.setState({
//     visible: true,
//   });
// };

// handleOk = e => {
//   console.log(e);
//   this.setState({
//     visible: false,
//   });
// };

// handleCancel = e => {
//   console.log(e);
//   this.setState({
//     visible: false,
//   });
// };

 const ethLink = "https://ropsten.etherscan.io/tx/"+citizenItem.transactionHash;
return (
<>
<div className={style.citizenItemRow}>
<Row>
<Col md={1} xs={5}><UserOutlined /> {citizenItem.returnValues.id}</Col>
<Col md={2} xs={5}> {citizenItem.returnValues.name}</Col>
<Col md={1} xs={2}>{citizenItem.returnValues.age}</Col>
<Col md={14} xs={5}>
<ReadMoreReact text={citizenItem.returnValues.city} 
min={10}
ideal={12}
max={15}
readMoreText="view more"
/>
</Col>
<Col md={3} xs={3}>
<Link to={`citizenDetails/${citizenItem.returnValues.id}`}><Button type="primary">View Notes</Button>
</Link>
</Col>
<Col md={3} xs={5}><a target="_blank" href={ethLink}>View txHash</a> </Col>

</Row>





{/* 

<Button type="primary" onClick={setShowModal(true)}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={showModal}
        //   onOk={this.handleOk}
        //   onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
</Modal> */}



</div>
</>
);
};

export default CitizenItem;