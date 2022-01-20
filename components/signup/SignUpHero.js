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
        <p className="t-body1 t-light-gray signup-hero__body">Le groupe musical 1K Kalibre, dans le but de rester en contact avec ces supporters, a jugé bon de créer un groupe whatsapp afin de permettre à ces super supporter d'être les tous premiers à écouter les nouveautés du groupe et même d'avoir accès à d'autres privilèges. Soyez donc parmis les premiers à écouter le nouveau et premier morceau du groupe intitulé, <b>Colorée</b>.</p>
      </motion.div>
    </section>
  )
}
