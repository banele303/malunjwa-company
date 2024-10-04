'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We provide plumbing services across major cities in South Africa, including Johannesburg, Cape Town, Durban, and surrounding areas."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we offer a 1-year warranty on all our plumbing work. For specific product warranties, please ask our team for details."
  },
  {
    question: "How quickly can you respond to emergencies?",
    answer: "Our emergency team aims to respond within 1 hour for urgent plumbing issues. We're available 24/7 for emergencies."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we offer free estimates for most of our services. Contact us to schedule an assessment of your plumbing needs."
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Absolutely. All our plumbers are fully licensed, insured, and undergo regular training to stay updated with the latest plumbing technologies and techniques."
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our plumbing services.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left font-semibold p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-4 pb-4 rounded-b-lg shadow-md"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}