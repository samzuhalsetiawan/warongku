import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title }) {
  return (
    <>
      <div className={styles['main-title']}>
        <h2>{ title || "NO TITLE" }</h2>
      </div>
      <div className={styles['garis-pemisah']}>
        <span className={styles['belah-ketupat']}></span>
        <div className={styles['garis']}></div>
      </div>
    </>
  )
}