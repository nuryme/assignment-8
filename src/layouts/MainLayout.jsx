import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div>
      <div className='mx-8 mt-8'>
      <NavBar></NavBar>

      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
