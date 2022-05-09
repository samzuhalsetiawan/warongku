import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div className={styles['main-container']}>
      <img src="/warongku_logo.png" alt="Warongku Logo" />
      <p>Sejak 2017</p>
    </div>
  )
}