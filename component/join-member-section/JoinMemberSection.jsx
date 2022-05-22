import styles from './JoinMemberSection.module.css';

export function JoinMemberSection() {
  return (
    <section className={styles['main-container']}>
      <img src={"/carousel2.png"} alt="Background Join member" />
      <div className={styles['content']}>
        <h3>YUK DAFTAR DAN DAPATKAN</h3>
        <div className={styles['diskon-container']}>
          <span>20%</span>
          <span>off</span>
        </div>
        <h3>Diskon Pemesanan Selanjutnya!</h3>
        <button className={styles['tombol']}>Daftar</button>
      </div>
    </section>
  )
}