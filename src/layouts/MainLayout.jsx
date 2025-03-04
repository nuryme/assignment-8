import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import { Toaster } from 'react-hot-toast';

export default function MainLayout() {
  const {pathname} = useLocation()
  // console.log(pathname)
  return (
    <div className=''>
      <Toaster />
      <div className={pathname === '/' ? 'mx-8 mt-8  text-white bg-primaryColor  rounded-t-[32px]' : ''}>
      <NavBar pathname={pathname}></NavBar>

      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
