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
        <h1 className="t-h1">1K Kalibre - Colorée</h1>
        <p className="t-body1 t-light-gray signup-hero__body">1K Kalibre voudrait permettre à certaine personne de rejoindre son fan club afin de faire partie des personne qui écouterons le morceau avant sa sortie officielle.</p>
      </motion.div>
    </section>
  )
}
