import styles from './PromoSpesial.module.css';

export default function PromoSpesial({ imgUrl, imgAlt }) {
  return (
    <section className={styles['main-container']}>
      <img className={styles['main-image']} src={imgUrl} alt={imgAlt || "Unknown"} />
      <div className={styles['description']}>
        <h2>Special Promo</h2>
        <p>Diskon Hingga 30%!!</p>
        <ul>
          <li>
            <span>
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.36583L7 11.6877L17 1.04395" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Lörem ipsum pönde supravis. Misk biovise i inäpat antropotris.
          </li>
          <li>
            <span>
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.36583L7 11.6877L17 1.04395" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            Lörem ipsum pönde supravis. Misk biovise i inäpat antropotris.
          </li>
        </ul>
      </div>
    </section>
  )
}