
import React from 'react'
import { PrismaClient } from "@prisma/client";
import Footer from '@/components/Footer';
import BlogDetails from '@/components/BlogDetails';
import Navbar from '@/components/Navbar';


async function getData(id) {
  const prisma = new PrismaClient();
  let Details = await prisma.blog.findUnique({ where: { id: parseInt(id) } })
  return Details
}

async function page({ params }) {

  let id = params.slug;
  let data = await getData(id)
  return (
    <main>
      {/* Header Section */}
      <Navbar />

      {/* Blog Details */}
      <BlogDetails data={data} />

      {/* Footer Section */}
      <Footer />
    </main>
  )
}

export default page