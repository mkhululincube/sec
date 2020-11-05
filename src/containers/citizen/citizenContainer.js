import React, { useEffect, useState } from 'react';
import Web3 from 'web3'
import { CITIZENS_ADDRESS, CITIZENS_ABI } from '../../config/citizens'
import Citizen from '../../components/citizen/citizen';

const testnet = 'https://ropsten.etherscan.io/';
// const walletAddress = '0x8690F1feff62008A396B31c2C3f380bD0Ca6d8b8';

const CitizenContainer = () => {

    const [citizen, setCitizen]  = useState({}); 
    const [citizenDetails, setCitizenDetails]  = useState({}); 

useEffect(()=>{
    const fetchCitizen = async () => {

    //const web3 = new Web3(new Web3.providers.HttpProvider(testnet));

    const web3 = new Web3(Web3.givenProvider || testnet)
    //this.setState({ account: accounts[0] })
    const citizensList = new web3.eth.Contract(CITIZENS_ABI, CITIZENS_ADDRESS)
    setCitizen({ citizensList })

      const citizenD = await citizensList.methods.getNoteByCitizenId(32).call()
      setCitizenDetails(citizenD)

    }
    fetchCitizen()

},[])
console.log("citizens", citizen)
console.log("citizenDetails", citizenDetails)


    return (
        <>
            <Citizen citizens={citizen} /> 
        </>
    );
};

export default CitizenContainer;