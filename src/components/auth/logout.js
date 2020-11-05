import React from 'react';

const Logout = (props) => {
    localStorage.removeItem("citizenMicroFrontend-token");
    props.history.push('/')

};

export default Logout;