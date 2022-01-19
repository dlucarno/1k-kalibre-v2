import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePlans() {
  return (
    <section className="home-plans">
      <div className="container container--home-plans">
        <div className="plans">
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0, 
              transition : {
                type: "spring",
                delay: 0.5
            }}}
            className="plan plan--white">
            <div className="plan__heading">
              <h2 className="plan__type t-h2">Basic</h2>
              <p className="plan__price t-price">Free</p>
              <p className="plan__billed t-body2">Up to 5 users for free</p>
            </div>
            <div className="plan__features t-body2">
              <p>Basic document collaboration</p>
              <p>2 GB storage</p>
              <p>Great security and support</p>
            </div>
            <Link href="/signup">
              <a className="btn btn--light-blue plan__cta-btn">Try for Free</a>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0, 
              transition : {
                type: "spring",
                delay: 0.75
            }}}
            className="plan plan--blue">
            <div className="plan__heading">
              <h2 className="plan__type t-h2">Pro</h2>
              <p className="plan__price t-price">$9.99</p>
              <p className="plan__billed t-body2">Per user, billed monthly</p>
            </div>
            <div className="plan__features t-body2">
              <p>All essential integrations</p>
              <p>50 GB storage</p>
              <p>More control and insights</p>
            </div>
            <Link href="/signup">
              <a className="btn btn--white plan__cta-btn">Try for Free</a>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 0, 
              transition : {
                type: "spring",
                delay: 1
            }}}
            className="plan plan--white">
            <div className="plan__heading">
              <h2 className="plan__type t-h2">Ultimate</h2>
              <p className="plan__price t-price">$19.99</p>
              <p className="plan__billed t-body2">Per user, billed monthly</p>
            </div>
            <div className="plan__features t-body2">
              <p>Robust work management</p>
              <p>100 GB storage</p>
              <p>VIP support</p>
            </div>
            <Link href="/signup">
              <a className="btn btn--light-blue plan__cta-btn">Try for Free</a>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
