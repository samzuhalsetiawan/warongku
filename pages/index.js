import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../component/carousel/Carousel'
import { JoinMemberSection } from '../component/join-member-section/JoinMemberSection'
import MenuFavorit from '../component/menu-favorit/MenuFavorit'
import MenuList from '../component/menu-list/MenuList'
import Navbar from '../component/navigation/navbar/Navbar'
import PromoSpesial from '../component/promo-spesial/PromoSpesial'

export default function Home() {
  return (
    <div id='main-container'>
      <Navbar />
      <Carousel />
      <div id='main-section-container'>
        <MenuFavorit />
        <MenuList />
      </div>
      <PromoSpesial imgUrl={"/promo_spesial.png"} imgAlt={"Spesial Promo"} />
      <JoinMemberSection />
    </div>
  )
}
