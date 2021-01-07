import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clever Entertainment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        <NavBar />
        
        <h1 className={styles.title}>
          XKCD Webcomic
        </h1>

        <TodayTitle />

        <TodayComic />
        
        <h2>
          Previous 10
        </h2>

        <PreviousList />

        {/* <p className={styles.description}>
          Get started by editing
        </p> */}

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

function NavBar() {
  return <nav>Home?</nav>
}

function TodayTitle() {
  return <h2>Today Title</h2>
}

function TodayComic() {
  return <p>pic of comic here</p>
}

function PreviousList() {
  return <footer>List</footer>
}
