import Cart from '../../svg/cart/Cart'
import Dropdown from '../../svg/dropdown/Dropdown'
import Logo from '../../svg/logo/Logo'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles['main-container']}>
      <div>
        <ul>
          <li>HOME</li>
          <li>MENU</li>
          <li>LAINNYA <Dropdown /></li>
        </ul>
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <ul>
          <li>CART <Cart /></li>
          <li>MASUK</li>
          <li>
            <button className={styles['tombol-daftar']}>DAFTAR</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}