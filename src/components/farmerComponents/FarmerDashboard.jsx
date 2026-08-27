// import React from 'react'

import ProductPanel from "./ProductPanel"
import StatusPanel from "./StatusPanel"

const FarmerDashboard = () => {

    
  return (
    <div className='min-h-screen w-full grid grid-cols-1 p-6'>
      <StatusPanel />
      <ProductPanel />
    </div>
  )
}

export default FarmerDashboard
