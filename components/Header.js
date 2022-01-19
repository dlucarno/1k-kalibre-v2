import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
      <Link href="/">
        <a className="header__logo">
          {/* <img src="/logo.svg" alt="site logo"/> */}
          <button className="btn btn--blue" type="submit">1K KALIBRE</button>
        </a>
      </Link>
      </div>
    </header>
  )
}
