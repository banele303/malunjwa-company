'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Custom hook for intersection observer
const useInView = () => {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('hero-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return isInView
}

export default function ElectricHero() {
  const isInView = useInView()

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="hero-section" className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <Image
        src="/electrical/generator.png"
        alt="Construction site with cranes and workers at sunset"
        width={1920}
        height={1080}
        priority
        className="object-cover object-center"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/50"
        style={{ mixBlendMode: 'multiply' }}
      />
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl text-center">
          <motion.h1 
            className="mb-4 text-xl font-bold text-white sm:text-3xl md:text-4xl lg:text-4xl"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expert Electrical Services for Your Home and Business
          </motion.h1>
          <motion.p 
            className="mb-8 text-lg text-gray-200 sm:text-xl md:text-2xl"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
           Professional, reliable, and affordable electrical solutions tailored to your needs
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" className="w-full sm:w-auto text-sm md:text-base">
             CALL +27 63 199 5124
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm md:text-base">
              Get a Free Quote
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}