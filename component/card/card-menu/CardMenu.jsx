import styles from './CardMenu.module.css'

export default function CardMenu({ linkImg, altImg, namaMakanan, harga, deskripsi }) {
  return (
    <div className={styles['main-container']}>
      <img src={linkImg || ""} alt={altImg || ""} />
      <div className={styles['card-detail']}>
        <div className={styles['nama-dan-harga']}>
          <h3>{namaMakanan || "Nama Makanan"}<br />Warongku,<br /><span className={styles['lokasi']}>Tenggarong</span></h3>
          <h3>{harga || "Rp 0"}</h3>
        </div>
        <p>{deskripsi || "Deskripsi"}</p>
      </div>
    </div>
  )
}