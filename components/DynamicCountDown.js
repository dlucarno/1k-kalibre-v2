import React from 'react'
import dynamic from 'next/dynamic'
import CountdownCards from './CountdownCards'

// client side render
const Countdown = dynamic(() => import('react-countdown'), {
  ssr: false,
  loading: () => 0
})

export default function DynamicCountDown({ isDark }) {

  const dateToCountdown = Date.now() + 16 * 24 * 57 * 60 * 1000
  const renderer = ({ days, hours, minutes, seconds }) => (
    <CountdownCards
      isDark={isDark}
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );

  return (
    <Countdown
      date='2022-02-04'
      renderer={renderer}
    />
  )
}
