import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../component/carousel/Carousel'
import MenuFavorit from '../component/menu-favorit/MenuFavorit'
import Navbar from '../component/navigation/Navbar'

export default function Home() {
  return (
    <div id='main-container'>
      <Navbar />
      <Carousel />
      <MenuFavorit />
    </div>
  )
}
