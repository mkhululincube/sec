import React from 'react';
import { motion } from "framer-motion"

import globalstyle from '../../style.module.css';

const TopFooter = () => {

    const features = [
        {details : "eiit in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
        {details : "et in touch with the A Team Get in touch with the A Team Get in touch with the A Team Get in"},
      ] 

    return (
<div className="container">
<div className="row">{
features.map((feature)=>(       
<div className="col-md-3"> 
<motion.div
    animate={{
      scale: [1, 1, 1, 1, 1],
      rotate: [0, 0, 20, 10, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  >        
<div className={globalstyle.itemHover}>
  </div>
  </motion.div>
</div>
))
}
</div>
</div>

);
};

export default TopFooter;