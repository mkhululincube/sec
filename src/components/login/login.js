import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { Row, Col, Form, Button } from 'antd';
import styles from './forms.module.css';
import logo from '../../assets/img/securrency-logo.png';
  
const Login = () => {


const {register, handleSubmit, errors} = useForm();

const onSubmit = data => {
alert(data)
}


return (
<div className={styles.loginContainer}>
<Row>
<Col md={4} className={styles.loginInfo}>
</Col>
<Col md={4} className={styles.loginForm}>
<Link to='/'><img src={logo} className={styles.formLogo} /></Link>
{localStorage.getItem('loggedin')}
<Form onSubmit={handleSubmit(onSubmit)}>
{errors.seller_email && <div className="alert alert-danger">Email is required.</div>}
<Form.Group controlId="formBasicEmail">
<div className={styles.formLabel}>Email address</div>
<Form.Control name='seller_email' ref={register({ required: true })} className={styles.formText} 
/>
</Form.Group>

<Form.Group controlId="formBasicPassword">
<div className={styles.formLabel}>Password</div>
<Form.Control ref={register} type="password" name='seller_password' className={styles.formText} />
</Form.Group>

<Button variant="primary" type="submit" className={styles.formBtn} >
Submit
</Button>
</Form>

<div className={styles.formFooter}><Link to="/signup">Create Account</Link> | <Link to="/forgot-password">Forgot Password</Link></div>
</Col>
</Row>
</div>
);
};

export default Login;