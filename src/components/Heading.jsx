import React from 'react'

export default function Heading({heading, body}) {
  return (
    <div className='text-center px-52'>
      <h1 className='h1 text-white'>{heading}</h1>
      <p className='text-white mt-6'>{body}</p>
    </div>
  )
}
