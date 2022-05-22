import CardMenuSmall from '../card/card-menu-small/CardMenuSmall';
import NavMenu from '../navigation/navmenu/NavMenu';
import SectionTitle from '../section-title/SectionTitle';
import styles from './MenuList.module.css';

export default function MenuList() {
  return (
    <section className={styles['main-container']}>
      <SectionTitle title={"MENU"} />
      <NavMenu />
      <div className={styles['card-menu-container']}>
        <CardMenuSmall
            linkImg={'/mie_ayam2.jpg'}
            altImg={"Mie Ayam"}
            namaMakanan={"Mie Ayam"}
            harga={"Rp 15000"}
            deskripsi={"Lörem ipsum bebide mikrott då gigavis. Speliga trahet inklusive fätell."} />
        <CardMenuSmall
            linkImg={'/bubur_ayam2.jpg'}
            altImg={"Bubur Ayam"}
            namaMakanan={"Bubur Ayam"}
            harga={"Rp 15000"}
            deskripsi={"Lörem ipsum bebide mikrott då gigavis. Speliga trahet inklusive fätell."} />
        <CardMenuSmall
            linkImg={'/nasi_liwet2.jpg'}
            altImg={"Nasi Liwet"}
            namaMakanan={"Nasi Liwet"}
            harga={"Rp 15000"}
            deskripsi={"Lörem ipsum bebide mikrott då gigavis. Speliga trahet inklusive fätell."} />
        <CardMenuSmall
            linkImg={'/ayam_bakar.jpg'}
            altImg={"Ayam Bakar"}
            namaMakanan={"Ayam Bakar"}
            harga={"Rp 15000"}
            deskripsi={"Lörem ipsum bebide mikrott då gigavis. Speliga trahet inklusive fätell."} />
        <CardMenuSmall
            linkImg={'/ayam_madura.jpg'}
            altImg={"Ayam Hitam Madura"}
            namaMakanan={"Ayam Hitam Madura"}
            harga={"Rp 25000"}
            deskripsi={"Lörem ipsum bebide mikrott då gigavis. Speliga trahet inklusive fätell."} />
        <CardMenuSmall
            linkImg={'/nasi_liwet2.jpg'}
            altImg={"Nasi Liwet"}
            namaMakanan={"Nasi Liwet"}
            harga={"Rp 15000"}
            deskripsi={"Lörem ipsum bebide mikrott då gigavis. Speliga trahet inklusive fätell."} />
      </div>
    </section>
  )
}