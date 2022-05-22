import CardMenu from '../card/card-menu/CardMenu'
import SectionTitle from '../section-title/SectionTitle'
import styles from './MenuFavorit.module.css'

export default function MenuFavorit() {
  return (
    <section className={styles['main-container']}>
      <SectionTitle title={"MENU FAVORIT"} />
      <div className={styles['card-container']}>
        <CardMenu
          linkImg={'/nasi_liwet.png'}
          altImg={"Nasi Liwet"}
          namaMakanan={"Nasi Liwet"}
          harga={"Rp 15000"}
          deskripsi={"Nasi Liwet terenak di bumi pertiwi."} />
        <CardMenu
          linkImg={'/bubur_ayam.png'}
          altImg={"Bubur Ayam"}
          namaMakanan={"Bubur Ayam"}
          harga={"Rp 15000"}
          deskripsi={"Dimakan saat cuaca dingin, nikmatnya jadi berkali-kali lipat!!!"} />
        <CardMenu
          linkImg={'/mie_ayam.png'}
          altImg={"Mie Ayam"}
          namaMakanan={"Mie Ayam"}
          harga={"Rp 15000"}
          deskripsi={"Mie ayam adalah jajanan kaki lima yang lekat dengan masyarakat. Tak sedikit yang menjadikannya sebagai makanan favorit. Apalagi menu ini mudah ditemui."} />
      </div>
    </section>
  )
}