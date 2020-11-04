import React from 'react';
import {useForm} from 'react-hook-form';
// import {Form} from 'react-bootstrap';
import { Form, Input, InputNumber, Button, Divider, Select } from 'antd';

import styles from './forms.module.css';


const InputField = (props) => {
    const {register, handleSubmit, errors} = useForm();
    const input_name = props.name;
    const input_type = props.type;
    const input_label = props.label;
    return (
    <>
    
    {errors.input_name && `${input_name} is required`}
    
     <div className={styles.formLabel}>{input_label}</div>
    <Input name={input_name} type={input_type} className={styles.formText} 
    />
     </>
    );
    };

export default InputField;