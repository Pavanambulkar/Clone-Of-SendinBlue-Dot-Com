import React from 'react'
import Accelerate from '../EnterpriseCompo/Accelerate'
import CustomBuilt from '../EnterpriseCompo/CustomBuilt'
import HereCustomer from '../EnterpriseCompo/HereCustomer'
import Logos from '../EnterpriseCompo/Logos'
import Plans from '../EnterpriseCompo/Plans'
import Technology from '../EnterpriseCompo/Technology'

const Enterprise = () => {
  return (
    <div>
        <Accelerate/>
        <Logos/>
        <Plans/>
        <HereCustomer/>
        <CustomBuilt/>
        <Technology/>
    </div>
  )
}

export default Enterprise