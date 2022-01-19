import React from 'react'

export default function StaticCountDown({ isDark }) {
  const staticCountdownClasses = isDark ? 'static-countdown static-countdown--dark' : 'static-countdown static-countdown--light'
  return (
    <div className={staticCountdownClasses}>
      <div className="static-countdown__card">
        <p className="t-counter-number static-countdown__card__number">47</p>
        <p className="t-counter-unit">days</p>
      </div>
      <div className="static-countdown__card">
        <p className="t-counter-number static-countdown__card__number">07</p>
        <p className="t-counter-unit">hours</p>
      </div>
      <div className="static-countdown__card">
        <p className="t-counter-number static-countdown__card__number">56</p>
        <p className="t-counter-unit">min</p>
      </div>
      <div className="static-countdown__card">
        <p className="t-counter-number static-countdown__card__number">14</p>
        <p className="t-counter-unit">sec</p>
      </div>
    </div>
  )
}
