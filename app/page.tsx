import Banner from './components/Banner/page';
import People from './components/People/page';
import Features from './components/Features/page';
import Business from './components/Business/page';
import Payment from './components/Payment/page';
import Pricing from './components/Pricing/page';


export default function Home() {
  return (
    <main>
      <Banner />
      <People />
      <Features />
      <Business />
      <Payment />
      <Pricing />
    </main>
  )
}
