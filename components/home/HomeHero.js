import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="container container--home">
        <motion.div 
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0, 
            transition : {
              type: "spring"
          }}}
          transition={{ duration: 0.5 }}
          className="home-hero__content">
          <h1 className="t-h1 home-hero__content__heading">1K Kalibre - Colorée</h1>
          <p className="t-body1 t-light-gray home-hero__content__body"><b>1K Kalibre</b> qui se lit "Mille Kalibre" est un groupe de musique composé des jeunes artiste tels que : <b>Black-W</b>, <b>Chrislema</b>, <b>Ubkris</b> et <b>Piss</b>. Le groupe sortira son premier single, intitulé <b>Colorée</b>, ce 04 Février 2022. Soyez attentif car ce sera le fire.</p>
          {/* <Link href="/signup">
            <a className="btn btn--blue btn-shadow-blue">Télécharger</a>
          </Link> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -90 }}
          animate={{ opacity: 1, y: 0, 
            transition : {
              type: "spring"
          }}}
          transition={{ duration: 0.5 }}
          className="home-hero__image">
          <img src="/assets/home/1kkalibre.jpg" alt="home hero" />
        </motion.div>
      </div>
    </section>
  )
}
