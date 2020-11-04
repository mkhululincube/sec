import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Badge } from 'antd';
import styles from './header.module.css';
import globalstyle from '../../style.module.css';
import logo from '../../assets/img/securrency-logo.png';
import cx from 'classnames'
import ScreenSize from '../settings/screenSize';


const Topbar = (props) => {

     const [ visibility, setVisible ] = useState(false);
     const [ placement ] = useState('left');

     const showDrawer = () => {
          setVisible(true);
     };
   
     const onClose = () => {
          setVisible(false);
     };
   



const width = ScreenSize();

const [showCart, setShowCart] = useState(false);
const [showHowToSell, setShowHowToSell] = useState(false);

 

return (
<>
<div className={styles.nav} >
<div className={globalstyle.container}>
<span className={ cx(styles.showSideNav, styles.navbarLeft) }   onClick={showDrawer}> 

ll
</span>


{ (width < 700) ?
<ul className={ cx(globalstyle.topLogoBorder, styles.navbarLeft) } >
<li><Link to="/"><img className={globalstyle.topLogo} src={logo} alt="" /></Link></li>
</ul> : null
}
    <ul className={styles.navbarRight}>
    <li onClick={()=>setShowHowToSell(!showHowToSell)} onClick={()=>setShowHowToSell(!showHowToSell)} className={styles.toggleCart}>How To Sell</li>
    <li onClick={()=>setShowCart(!showCart)} className={styles.toggleCart}>   <Badge count={5} offset={[10, 10]}>
ujk
    </Badge></li>
    </ul> 
 { showHowToSell ?  
  <ul className={globalstyle.topBarDropdown}>
         <li><Link to="/sellerlogin" className={globalstyle.roundButton}>Start selling</Link></li>
 </ul>
: null }
  </div>
 </div>


 </>
);
};

export default Topbar;
