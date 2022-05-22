import styles from './NavMenu.module.css';

export default function NavMenu() {
  return (
    <nav className={styles['main-container']}>
      <ul>
        <li><button className={styles['tombol']}>Makanan</button></li>
        <li><button className={styles['tombol']}>Minuman</button></li>
        <li><button className={styles['tombol']}>Paket</button></li>
      </ul>
    </nav>
  )
}