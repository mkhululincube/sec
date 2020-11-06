import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Alert, Space } from 'antd';

import Web3 from 'web3'
import { Citizens } from '../../actions/actions';
import CitizenView from '../../components/citizen/citizenView';
import { CITIZENS_ADDRESS, CITIZENS_ABI } from '../../config/citizens'
import { TESTNET_URL } from '../../config/config';
import CitizenDetails from '../../components/citizen/citizenDetails';

const CitizenDetailsContainer = (props) => {

const dispatch = useDispatch();
const citizenId = props.match.params.citizenId;
  
//const [citizensList, setCitizensList]  = useState([]); 
const [citizenNotes, setCitizenNotes]  = useState([]); 
const numItems = 5;
const initialBlock = 12;

useEffect(()=>{
    const fetchCitizenNotes = async () => {
    const web3 = new Web3(Web3.givenProvider || TESTNET_URL)
    const citizensList = new web3.eth.Contract(CITIZENS_ABI, CITIZENS_ADDRESS)
    const citizenD = await citizensList.methods.getNoteByCitizenId(citizenId).call()
    setCitizenNotes(citizenD)
}
fetchCitizenNotes()
},[])

console.log("citizenDetails", citizenNotes)

return (
<>
<Suspense fallback={
<Space>
<Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
</Space>}>
<CitizenDetails citizenDetails={citizenNotes} />

</Suspense>   
</>
);
};

export default CitizenDetailsContainer;