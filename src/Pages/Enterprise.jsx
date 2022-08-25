import React from 'react'
import Accelerate from '../EnterpriseCompo/Accelerate'
import Compaign from '../EnterpriseCompo/Compaign'
import CustomBuilt from '../EnterpriseCompo/CustomBuilt'
import HereCustomer from '../EnterpriseCompo/HereCustomer'
import Logos from '../EnterpriseCompo/Logos'
import Organisation from '../EnterpriseCompo/Organisation'
import Plans from '../EnterpriseCompo/Plans'
import Technology from '../EnterpriseCompo/Technology'
import Transaction from '../EnterpriseCompo/Transaction'
import { Footer } from '../SmallCompo/Footer'

const Enterprise = () => {
  return (
    <div>
        <Accelerate/>
        <Logos/>
        <Plans/>
        <HereCustomer/>
        <CustomBuilt/>
        <Technology/>
        <Compaign/>
        <Transaction/>
        <Organisation/>
        <Footer/>
    </div>
  )
}

export default Enterprise