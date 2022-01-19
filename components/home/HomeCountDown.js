import React from 'react'
import Link from 'next/link'
import StaticCountDown from '../StaticCountDown'
import DynamicCountDown from '../DynamicCountDown'

export default function HomeCountDown({ isStatic }) {
  const comingDate = new Date(Date.now() + 15 * 24 * 57 * 60 * 1000)

  return (
    <section className="home-countdown">
      <h2 className="sr-only">Coming Soon</h2>
      <div className="container container--countdown">
        <div className="countdown__info">
          <p className="t-coming"><span className="t-white">Sortie officiel :</span> <span className="t-blue">{comingDate.getDay()} {comingDate.toLocaleString('fr', { month: 'short' })} {comingDate.getFullYear()}</span></p>
          {isStatic ? <StaticCountDown isDark={true} /> : <DynamicCountDown isDark={true} /> }
        </div>
        <Link href="/signup">
          <a className="btn btn--blue">Télécharger</a>
        </Link>
      </div>
    </section>
  )
}
