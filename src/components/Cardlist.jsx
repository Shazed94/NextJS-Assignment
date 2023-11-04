
import React from 'react'
import Card from './Card'
import Pagination from './Pagination'
import { PrismaClient } from '@prisma/client';

async function getData() {
  const prisma=new PrismaClient();
  let blogs= await prisma.blog.findMany({
      orderBy: {id: 'desc'}
  })

  return blogs
}

const Cardlist =async () => {
  const data=await getData()
  return (
    <div className='w-2/3'>
      <h2 className='mb-8 capitalize font-semibold text-2xl'>Resent Posts</h2>
      <Card data={data}/>
      <Pagination/>
    </div>
  )
}

export default Cardlist