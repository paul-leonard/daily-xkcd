import Link from 'next/link'
import NavBar from './index'

function About() {
  return (
    <>
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
    </>
  )
}

export default About;