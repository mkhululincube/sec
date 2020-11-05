import React, { useState } from 'react';
import { motion } from "framer-motion";

import CitizenItem from './citizenItem';
import style from './citizen.module.css'
import globalstyle from '../../style.module.css'
import { Col, Row } from 'antd';
import AddCitizen from './addCitizen';

const Citizen = (props) => {

const [showAddCitizen, setShowAddCitizen] = useState(false);

return (
        <div className={style.citizensContainer}>
        <div className={globalstyle.container}>      
<Row>
<Col md={12} xs={24}>
<CitizenItem />
</Col>
<Col md={12} xs={24}>

<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
<AddCitizen />
</motion.div>
            </Col>
            </Row>
         </div>
        </div>
    );
};

export default Citizen;