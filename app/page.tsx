'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg width="48" height="48" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="black" stroke="white" strokeWidth="3" />
                <path 
                  d="M16 6L18 14L26 16L18 18L16 26L14 18L6 16L14 14Z" 
                  fill="white"
                />
              </svg>
              <span className="text-3xl font-bold">SPARK</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block">SPARK</span>
            <motion.span 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="block text-gray-400"
            >
              YOUR IDEAS
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="block"
            >
              TO LIFE
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            We craft exceptional websites that push boundaries and inspire innovation for your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-center"
          >
            <Link href="/contact">
              <button className="border border-white px-12 py-6 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">What We Can Build</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the types of websites and digital experiences we create for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                category: 'Web Design',
                image: './images/ecommerce.jpg',
                description: 'Modern shopping experience'
              },
              {
                title: 'Tech Startup',
                category: 'Landing Page',
                image: './images/tech-startup.jpg',
                description: 'Clean and professional'
              },
              {
                title: 'Restaurant Chain',
                category: 'Web App',
                image: './images/restaurant.jpg',
                description: 'Food ordering system'
              },
              {
                title: 'Fashion Brand',
                category: 'E-commerce',
                image: './images/fashion.jpg',
                description: 'Luxury shopping experience'
              }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-900">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-2">{project.category}</p>
                      <p className="text-sm text-gray-400">{project.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <h3 className="text-4xl font-bold text-white">... And More!</h3>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <svg width="40" height="40" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="black" stroke="white" strokeWidth="3" />
                <path 
                  d="M16 6L18 14L26 16L18 18L16 26L14 18L6 16L14 14Z" 
                  fill="white"
                />
              </svg>
              <span className="text-3xl font-bold">SPARK</span>
            </div>
            <div className="flex space-x-8">
              {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            © 2024 SPARK. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}