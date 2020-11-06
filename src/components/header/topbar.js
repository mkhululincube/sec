import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import styles from './header.module.css';
import globalstyle from '../../style.module.css';
import ScreenSize from '../settings/screenSize';
import Dropdown from './dropdown';


const Topbar = (props) => {
     const history = useHistory();
     // JSON.parse(localStorage.getItem('citizenMicroFrontend-token')).username

     const [ visibility, setVisible ] = useState(false);
     const [ placement ] = useState('left');

     const showDrawer = () => {
          setVisible(true);
     };
   
     const onClose = () => {
          setVisible(false);
     };
   
   const logoutHandler =() => {
     localStorage.removeItem("citizenMicroFrontend-token");
     if(localStorage.getItem("citizenMicroFrontend-token") === null){
          history.push('/')
     }

}
  

const width = ScreenSize();

const [showDropdown, setDropdown] = useState(false); 

return (
<>
<div className={styles.nav} >
<div className={globalstyle.container}>

{/* <span className={ cx(styles.showSideNav, styles.navbarLeft) } > 

Test
</span> */}

 
 
    <ul className={styles.navbarRight}>
     <li onClick={()=>setDropdown(!showDropdown)}  className={styles.mousePointer}>   
   Welcome <SettingOutlined />
</li>
<li><span className={styles.mousePointer} onClick={logoutHandler}><LogoutOutlined /></span></li>
    </ul> 

  </div>
 </div>
 {/* { showDropdown ? <Dropdown /> : null } */}
  </>
);
};

export default Topbar;
