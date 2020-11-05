import React from 'react';
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form';
import { Divider, Form, Button } from 'antd';

import styles from './citizen.module.css';
import { AdminLoggedIn } from '../../actions/actions';

const loginItems = [
   {
     type: "text",
     name: "id",
     label: "Id",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid ID"
 
   },
   {
     type: "text",
     name: "age",
     label: "Age",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid Age"
 
   },
   {
     type: "text",
     name: "city",
     label: "City",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid City"
 
   },
   {
     type: "text",
     name: "name",
     label: "Name",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid Name"
 
   },
   {
     type: "text",
     name: "someNote",
     label: "Note",
     required: true,
     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
     message: "Invalid Notes"
 
   }
]

const AddCitizen = (props) => {

const dispatch = useDispatch();
   


const { control, register, handleSubmit, errors, setValue } = useForm();
const emailError = errors.email && "Enter your email address";



const onSubmit = data => {
   console.log(data);
   dispatch(AdminLoggedIn(data))
     localStorage.setItem('citizenMicroFrontend-token', JSON.stringify({
       loggedIn: true,
       token: data,
     }));
     props.history.push('/home')
}

return (

<div className={styles.loginForm}>
<Divider>Add citizen details</Divider>

<form  onSubmit={handleSubmit(onSubmit)}>
{ loginItems.map((item, i) =>(
 <>
<div className={styles.formLabel}>{item.label}</div>
    <Form.Item>
    {errors.name && errors.message}
<input
        type={item.type}
        name={item.name}
        className={styles.formText}
        ref={register({
          required: item.required,
          pattern: {
            value: item.value,
            message: item.message
          }
        })}
      />
    </Form.Item>
</>

))
}


<Button variant="primary"  htmlType="submit" className={styles.formBtn} >
Submit
</Button>

</form>

</div>
);
};

export default AddCitizen;