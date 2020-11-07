import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useForm} from 'react-hook-form';
import { Divider, Result, Form, Button } from 'antd';
import Loading from '../loading/loading';
import Web3 from 'web3';
import { CITIZENS_ADDRESS, CITIZENS_ABI } from '../../config/citizens'
import styles from './citizen.module.css';
import Requirements from '../requirements/requirements';
import NoAccount from '../requirements/noAccount';
const testnet = 'https://ropsten.etherscan.io/';

const loginItems = [
   {
     type: "number",
     name: "age",
     label: "Age",
     min : 18,
     max : 150,
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

  const web3Provider = useSelector(state=>state.Web3Provider);

const [loading, setLoading] = useState(false)
const [sucessMessage, setSucessMessage] = useState(false)
const [showForm, setShowForm] = useState(true)
const [noAccount, setNoAccount] = useState(false)


const { control, register, handleSubmit, errors } = useForm();
const ageError = errors.age && "Enter your name";



const onSubmit = async (data) => {
           setLoading(true);
            const {age, city, name, someNote} = data;
            const web3 = new Web3(Web3.givenProvider || testnet)
            const citizensList = new web3.eth.Contract(CITIZENS_ABI, CITIZENS_ADDRESS)
            const accounts = await web3.eth.getAccounts()

            try {
              await citizensList.methods.addCitizen(age, city, name, someNote).send({ from: accounts[0] })
            .once('receipt', (receipt) => {
              setSucessMessage(true);
              setLoading(false);
              setShowForm(false);     
          })
            } catch (e) {
              setNoAccount(true);
              setLoading(false);
          } finally {
              console.log('We do cleanup here');
          }


}      
 
return (
<div className={styles.loginForm}>
{loading ? <Loading /> : null }
{showForm ?
<>
<Divider>Add citizen details</Divider>

{
  noAccount && <NoAccount />
}

{ web3Provider ?
<form  onSubmit={handleSubmit(onSubmit)}>
{ loginItems.map((item, i) =>(
 <div key={i}>
<div className={styles.formLabel}>{item.label}</div>
    <Form.Item>
    {errors.name && errors.message}
<input
        type={item.type}
        name={item.name}
        style={{fontSize:"16px"}}
        className={styles.formText}
        ref={register({
          required: item.required,
          min: item.min,
          max: item.max,
          pattern: {
            value: item.value,
            message: item.message
          }
        })}
      />
    </Form.Item>
</div>
))
}

<Button variant="primary"  htmlType="submit" className={styles.formBtn} >
Submit
</Button>
</form>
:
<Requirements />
}

</>
:
null
}

{
sucessMessage ?
    <Result
    status="success"
    title="Citizen details added to blockchain"
    subTitle="Please note that the process will take approximately 30secs tom update on the blockchain"
    extra={[
      <Button onClick = {()=>{
        setShowForm(true)
        setSucessMessage(false)
      }} type="primary" key="console">
        Add more citizens
      </Button>,
     <Link to={`/citizens`}><Button key="buy">View citizens</Button></Link> ,
    ]}
  />
:
null
}
</div>
);
};

export default AddCitizen;