import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <nav className={styles.navbar}>
        <span className={styles.navTitle}>Mind-Mate</span>
      </nav>
      <div className={styles.body}>hey battaboom battabing, mental health yay</div>
    </main>
  )
}
