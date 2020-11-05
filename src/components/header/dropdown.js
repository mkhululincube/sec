import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';


const Dropdown = (props) => {

return (
        <div className={styles.dropDown}>
        <div className={styles.dropDownHeader}>
          <i className="fa fa-shopping-cart cart-icon"></i> 
          <div className={styles.dropDownTotal}>
            <span>Total:</span>
<span className={styles.mainColorText}>gg</span>
          </div>
        </div> 

    
        <Link to="/cart"><span className={styles.button}>Proceed to Checkout</span></Link>
        <Link to="/dashboard"><span className={styles.button}>Login</span></Link>
      </div>  
        
      );
};

export default Dropdown;