// import React from 'react'
import Navbar from "../components/farmerComponents/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const FarmerLayout = () => {
  return (
      <div className='flex min-h-screen flex-col'>
          <Navbar />
                <main className='flex-1'>
                    <Outlet />
                </main>
                <Footer />
            </div>
  )
}

export default FarmerLayout
