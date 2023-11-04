
import React from 'react'
import Card from './Card'
import Pagination from './Pagination'

const Cardlist = () => {
  return (
    <div className='w-2/3'>
      <h2 className='mb-8 capitalize font-semibold text-2xl'>Resent Posts</h2>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination/>
    </div>
  )
}

export default Cardlist