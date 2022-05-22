import styles from './CardMenuSmall.module.css'

export default function CardMenuSmall({ linkImg, altImg, namaMakanan, harga, deskripsi }) {
  return (
    <div className={styles['main-container']}>
      <img src={linkImg || ""} alt={altImg || ""} />
      <div className={styles['card-detail']}>
        <div className={styles['nama-dan-harga']}>
          <h3>{namaMakanan || "Nama Makanan"}</h3>
          <h3 className={styles['lokasi']}>{harga || "Rp 0"}</h3>
        </div>
        <p className={styles['deskripsi']}>{deskripsi || "Deskripsi"}</p>
        <div className={styles['counter']}>
          <button className={styles['minus']}>&minus;</button>
          <span>1</span>
          <button className={styles['plus']}>&#43;</button>
        </div>
        <div className={styles['pesan-dan-star']}>
          <button>Pesan</button>
          <span>4.5 ⭐</span>
        </div>
      </div>
    </div>
  )
}