'use client'

import { motion } from 'framer-motion'
import { Clock, BookOpen, Play } from 'lucide-react'
import Image from 'next/image'
import AnimatedCard from '../../components/AnimatedCard'

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Leadership Fundamentals",
      description: "Master the core principles of effective leadership through interactive scenarios and real-world case studies.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "6 weeks",
      lessons: "12 lessons",
      level: "Beginner",
      modules: [
        "Communication & Public Speaking",
        "Team Building & Collaboration",
        "Decision Making & Problem Solving",
        "Emotional Intelligence",
        "Project Leadership"
      ]
    },
    {
      id: 2,
      title: "Financial Literacy Mastery",
      description: "Build essential money management skills with hands-on budgeting, investing simulations, and market analysis.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "8 weeks",
      lessons: "16 lessons",
      level: "Intermediate",
      modules: [
        "Personal Budgeting & Saving",
        "Investment Basics & Portfolio Building",
        "Understanding Credit & Loans",
        "Entrepreneurship & Business Finance",
        "Economic Principles & Market Analysis"
      ]
    },
    {
      id: 3,
      title: "Advanced Communication Skills",
      description: "Develop powerful presentation, negotiation, and interpersonal communication abilities for future success.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "4 weeks",
      lessons: "8 lessons",
      level: "Advanced",
      modules: [
        "Advanced Public Speaking",
        "Negotiation Strategies",
        "Cross-Cultural Communication",
        "Digital Communication",
        "Conflict Resolution"
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Explore Our Courses
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive learning paths designed to build essential leadership and financial skills for your future success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-1 gap-12">
            {courses.map((course, index) => (
              <AnimatedCard key={course.id} delay={index * 0.2} className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full rounded-xl overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/30 transition-colors"
                    >
                      <Play size={32} />
                    </motion.button>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {course.level}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                      <p className="text-gray-600 mb-6">{course.description}</p>
                      
                      <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen size={16} />
                          <span>{course.lessons}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                        <ul className="space-y-2">
                          {course.modules.map((module, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              {module}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Enroll Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        Preview
                      </motion.button>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}