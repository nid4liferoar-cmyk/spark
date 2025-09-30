'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <svg width="48" height="48" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="black" stroke="white" strokeWidth="3" />
                <path 
                  d="M16 6L18 14L26 16L18 18L16 26L14 18L6 16L14 14Z" 
                  fill="white"
                />
              </svg>
              <span className="text-3xl font-bold">SPARK</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none">
                  <option>E-commerce Website</option>
                  <option>Landing Page</option>
                  <option>Web Application</option>
                  <option>Portfolio Website</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-white focus:outline-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}