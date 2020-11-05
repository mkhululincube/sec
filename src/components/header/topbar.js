import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from './header.module.css';
import globalstyle from '../../style.module.css';
import logo from '../../assets/img/securrency-logo.png';
import cx from 'classnames'
import ScreenSize from '../settings/screenSize';
import Dropdown from './dropdown';


const Topbar = (props) => {

     const token = localStorage.getItem('citizenMicroFrontend-token');

     const [ visibility, setVisible ] = useState(false);
     const [ placement ] = useState('left');

     const showDrawer = () => {
          setVisible(true);
     };
   
     const onClose = () => {
          setVisible(false);
     };
   



const width = ScreenSize();

const [showDropdown, setDropdown] = useState(false); 

return (
<>
<div className={styles.nav} >
<div className={globalstyle.container}>
<span className={ cx(styles.showSideNav, styles.navbarLeft) } > 

Test
</span>


 
    <ul className={styles.navbarRight}>
     <li onClick={()=>setDropdown(!showDropdown)} className={styles.toggleCart}>   
   Mkhululi <SettingOutlined />
</li>
<li><Link to="/logout"><LogoutOutlined /></Link></li>
    </ul> 

  </div>
 </div>
 { showDropdown ? <Dropdown /> : null }
  </>
);
};

export default Topbar;
