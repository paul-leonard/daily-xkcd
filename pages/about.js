import Link from 'next/link'
import styles from '../styles/About.module.css'


function About() {
  return (
    <div className={styles.container}>
      {/* TODO: Add NavBar here */}
      {/* <NavBar /> */}
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <h1>About</h1>
      <p>This is a feed of wonderful webcomics.</p>
    </div>
  )
}

export default About;