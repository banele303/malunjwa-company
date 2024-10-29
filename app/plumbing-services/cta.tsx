'use client'

import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-4">Ready to Solve Your Plumbing Issues?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and quote.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}