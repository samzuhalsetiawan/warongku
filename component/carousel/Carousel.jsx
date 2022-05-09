import styles from './Carousel.module.css'

export default function Carousel() {
  return (
    <div className={styles['main-container']}>
      <img src="/carousel.png" alt="Carousel" />
      <div className={styles['main-title']}>
        <h1>WARONGKU</h1>
        <p>Murah, Nikmat, Bikin Nambah</p>
      </div>
    </div>
  )
}