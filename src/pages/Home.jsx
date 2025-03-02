import React from 'react'
import Banner from '../components/Banner'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' mx-8'>
      <Banner></Banner>
      <div className='mt-[600px]'>
        <div>
            categories
        </div>
        <div>cards</div>
      </div>
    </div>
  )
}
