import React from 'react'
import StaticCountDown from '../StaticCountDown'
import DynamicCountDown from '../DynamicCountDown'
import { motion } from 'framer-motion'

export default function SignUpCountDown({ isStatic }) {
  const comingDate = new Date(Date.now() + 12 * 24 * 57 * 60 * 1000)
  return (
    <motion.section
    initial={{ opacity: 0, x: 90 }}
    animate={{ opacity: 1, x: 0, 
      transition : {
        type: "spring",
        delay: 0.5
    }}}
      className="signup-countdown">
      <div className="container container--signup-countdown">
        <div className="countdown__info">
          <p className="t-coming"><span className="t-dark-gray">Coming</span> <span className="t-blue">{comingDate.getDay()} {comingDate.toLocaleString('default', { month: 'short' })} {comingDate.getFullYear()}</span></p>
          {isStatic ? <StaticCountDown isDark={false} /> : <DynamicCountDown isDark={false} /> }
        </div>
      </div>
    </motion.section>
  )
}
