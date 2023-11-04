import Action from "@/components/Action";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Price from "@/components/Price";
import Service from "@/components/Service";
import {PrismaClient} from "@prisma/client";

async function getData() {
  const prisma=new PrismaClient();
  let blogs= await prisma.service.findMany({
      orderBy: {id: 'desc'}
  })
  return blogs
}


export default async function Home() {
  const data=await getData()
  return (
    <main>
      {/* Header Section */}
      <Navbar />

      {/* Service */}
      <Service data={data}/>

      {/* Price */}
      <Price />

      {/* Action */}
      <Action />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
