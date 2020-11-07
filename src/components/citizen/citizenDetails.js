import React from 'react';
import { Divider } from 'antd';
import style from './citizen.module.css'
import globalstyle from '../../style.module.css'

const CitizenDetails = (props) => {
const citizenDetails = props.citizenDetails;

return (
<div className={style.citizensPageContainer}>
<div className={globalstyle.container}>
<div className={style.citizensListContainer}>
<Divider>{citizenDetails}</Divider>

</div>
</div>
</div>

);
};

export default CitizenDetails;