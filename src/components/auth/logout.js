import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = (props) => {
    const history = useHistory();

    localStorage.removeItem("citizenMicroFrontend-token");
    history.push('/')

};

export default Logout;