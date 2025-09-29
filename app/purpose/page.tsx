'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Target, Users, Lightbulb } from 'lucide-react'
import Image from 'next/image'

export default function Purpose() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Purpose</h1>
            <p className="text-xl text-red-100">Addressing the critical gap in essential life skills education</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg mb-12"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem Statement</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Many young people are graduating without necessary life skills, such as communication skills, 
                  leadership, financial literacy, mental health, and time management skills. How can we, as youth 
                  leaders, fill these gaping holes through our own initiatives?
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">The Skills Gap Crisis</h3>
              <p className="text-gray-600 mb-6">
                Today's education system focuses heavily on academic knowledge but often overlooks the practical 
                life skills that young people need to thrive in the real world. This creates a dangerous gap 
                between what students learn and what they actually need to succeed.
              </p>
              
              <div className="space-y-4">
                {[
                  "Communication & interpersonal skills",
                  "Financial literacy & money management", 
                  "Leadership & decision-making abilities",
                  "Mental health & emotional intelligence",
                  "Time management & productivity"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Students in classroom"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-xl p-8 mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <Target className="text-blue-600 flex-shrink-0 mt-1" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Visora exists to bridge this critical gap by empowering young people with the essential life 
              skills they need to succeed. We believe that youth leaders can and should take initiative to 
              address these challenges through innovative, peer-to-peer learning experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="text-blue-600" size={24} />,
                  title: "Peer Leadership",
                  desc: "Youth teaching youth through relatable experiences"
                },
                {
                  icon: <Lightbulb className="text-blue-600" size={24} />,
                  title: "Practical Skills",
                  desc: "Real-world applications and hands-on learning"
                },
                {
                  icon: <Target className="text-blue-600" size={24} />,
                  title: "Measurable Impact",
                  desc: "Tracking progress and celebrating growth"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
            <p className="text-lg text-gray-600 mb-8">
              Together, we can ensure that no young person graduates without the essential skills they need 
              to thrive in life, work, and relationships.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Learning Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}