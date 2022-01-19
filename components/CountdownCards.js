import React from 'react'

export default function CountdownCards({ isDark, days, hours, minutes, seconds }) {

  const staticCountdownClasses = isDark ? 'static-countdown static-countdown--dark' : 'static-countdown static-countdown--light'
  return (
    <div className={staticCountdownClasses}>
      <div className="static-countdown__card">
        <p className="t-counter-number static-countdown__card__number">{days.toString().padStart(2, '0')}</p>
        <p className="t-counter-unit">Jours</p>
      </div>
      <div className="static-countdown__card">
        <p className="t-counter-number static-countdown__card__number">{hours.toString().padStart(2, '0')}</p>
        <p className="t-counter-unit">heures</p>
      </div>
      <div className="static-countdown__card">
        <p className="t-counter-number static-countdown__card__number">{minutes.toString().padStart(2, '0')}</p>
        <p className="t-counter-unit">minutes</p>
      </div>
      <div className="static-countdown__card">
        <p className="t-counter-number static-countdown__card__number">{seconds.toString().padStart(2, '0')}</p>
        <p className="t-counter-unit">secondes</p>
      </div>
    </div>
  )
}
