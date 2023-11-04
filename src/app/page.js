
import Cardlist from '@/components/Cardlist'
import Categorylist from '@/components/Categorylist'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (<>
    <Navbar />
    <Featured />
    <Categorylist />
    <div className="container flex gap-12">
      <Cardlist />
      <Menu />
    </div>

    <Footer />
  </>)
}
