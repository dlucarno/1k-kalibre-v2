import React from 'react'
import Link from 'next/link'
import StaticCountDown from '../StaticCountDown'
import DynamicCountDown from '../DynamicCountDown'

export default function HomeCountDown({ isStatic}) {
  const comingDate = new Date(Date.now() + 14 * 24 * 57 * 60 * 1000)

  return (
    <section className="home-countdown">
      <h2 className="sr-only">Coming Soon</h2>
      <div className="container container--countdown">
        <div className="countdown__info">
          <p className="t-coming"><span className="t-white">Sortie officielle: </span><span className="t-blue">04 FEVR 2022</span></p>
          {isStatic ? <StaticCountDown isDark={true} /> : <DynamicCountDown isDark={true} /> }
        </div>
        <a href="/colorée.mp3" download='1K Kalibre-Colorée.mp3' className="btn btn--blue">Télécharger</a> 
          
      </div>
    </section>
  )
}
