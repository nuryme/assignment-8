import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories({category}) {
  return (
    <div className='w-full flex flex-col justify-stretch'>
      <NavLink to={`/category/${category.category}`} className={"bg-secondaryColor/5 text-secondaryColor/60 text-lg button bodyText"}>{category.category}</NavLink>
    </div>
  )
}
