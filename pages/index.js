import Header from '../components/Header'

import styles from '../styles/styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
