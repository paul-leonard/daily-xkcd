import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { Component } from 'react';


function Home() {
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

        <PreviousList previousList={[2408,2407,2406,2405,2404,2403,2402,2401,2400,2399]} />

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
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}

function TodayTitle() {
  return <h2>Today Title</h2>
}

function TodayComic() {
  return <p>pic of comic here</p>
}

function PreviousList(props) {
  return (
    <ul>
      {props.previousList.map(previousComic => (
        <PreviousComic comicNumber={previousComic} />
      ))}
    </ul>
  )
}

function PreviousComic(props) {
  return <li>#{props.comicNumber}</li>
}

export default Home;
// export { NavBar };