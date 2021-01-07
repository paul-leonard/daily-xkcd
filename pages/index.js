import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { Component } from 'react';


function Home(props) {
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

        <TodayTitle title={props.title}/>

        <TodayComic imageAddress={props.img} imageDescription={props.alt} />
        
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

function TodayTitle(props) {
  return <h2>{props.title}</h2>
}

function TodayComic(props) {
  return <img src={props.imageAddress} alt={props.imageDescription} />
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

export async function getStaticProps() {
  // const todays = await fetchAll();

  return {
    props: {
      img: "https://imgs.xkcd.com/comics/2020_election_map.png",
      alt: "There are more Trump voters in California than Texas, more Biden voters in Texas than New York, more Trump voters in New York than Ohio, more Biden voters in Ohio than Massachusetts, more Trump voters in Massachusetts than Mississippi, and more Biden voters in Mississippi than Vermont.",
      title: "2020 Election Map",
    },
    revalidate: 1,
    // TODO: why revalidate question?
  }
}


export default Home;
// export { NavBar };