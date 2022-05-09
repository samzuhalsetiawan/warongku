import CardMenu from '../card/card-menu/CardMenu'
import styles from './MenuFavorit.module.css'

export default function MenuFavorit() {
  return (
    <section className={styles['main-container']}>
      <div className={styles['main-title']}>
        <h2>MENU FAVORIT</h2>
      </div>
      <div className={styles['card-container']}>
        <div className={styles['garis-pemisah']}>
          <span className={styles['belah-ketupat']}></span>
          <div className={styles['garis']}></div>
        </div>
        <div className={styles['inner-card-container']}>
          <CardMenu
            linkImg={'/nasi_liwet.png'}
            altImg={"Nasi Liwet"}
            namaMakanan={"Nasi Liwet"}
            harga={"Rp 12000"}
            deskripsi={"Nasi Liwet terenak di bumi pertiwi."} />
          <CardMenu
            linkImg={'/bubur_ayam.png'}
            altImg={"Bubur Ayam"}
            namaMakanan={"Bubur Ayam"}
            harga={"Rp 12000"}
            deskripsi={"Dimakan saat cuaca dingin, nikmatnya jadi berkali-kali lipat!!!"} />
          <CardMenu
            linkImg={'/mie_ayam.png'}
            altImg={"Mie Ayam"}
            namaMakanan={"Mie Ayam"}
            harga={"Rp 12000"}
            deskripsi={"Mie ayam adalah jajanan kaki lima yang lekat dengan masyarakat. Tak sedikit yang menjadikannya sebagai makanan favorit. Apalagi menu ini mudah ditemui."} />
        </div>
      </div>
    </section>
  )
}