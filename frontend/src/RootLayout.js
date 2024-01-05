import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from "./Footer.js";
import './RootLayout.css'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout