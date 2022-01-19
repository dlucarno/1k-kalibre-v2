import React from 'react'
import { motion } from 'framer-motion'

export default function SignUpHero() {
  return (
    <section className="signup-hero">
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0, 
          transition : {
            type: "spring",
            delay: 0.5
        }}}
        className="container container--signup-hero">
        <h1 className="t-h1">Work smarter. Save time.</h1>
        <p className="t-body1 t-light-gray signup-hero__body">Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>
      </motion.div>
    </section>
  )
}
