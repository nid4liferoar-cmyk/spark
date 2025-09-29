'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, Clock, Brain, Heart } from 'lucide-react'
import Image from 'next/image'

export default function Wellness() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const quizzes = [
    {
      question: "What is the most effective way to manage your time?",
      options: ["Multitask everything", "Prioritize tasks by importance", "Work longer hours", "Avoid planning"],
      correct: 1
    },
    {
      question: "Which is a healthy way to manage stress?",
      options: ["Ignore it completely", "Practice deep breathing exercises", "Stay up all night worrying", "Avoid all challenges"],
      correct: 1
    },
    {
      question: "What is an important aspect of mental wellness?",
      options: ["Never asking for help", "Maintaining healthy boundaries", "Working without breaks", "Comparing yourself to others"],
      correct: 1
    }
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuiz] = answerIndex
    setAnswers(newAnswers)

    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1)
    } else {
      setShowResults(true)
    }
  }

  const score = answers.reduce((acc, answer, index) => {
    return acc + (answer === quizzes[index].correct ? 1 : 0)
  }, 0)

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Time Management & Mental Health</h1>
            <p className="text-xl text-purple-100">Master essential wellness skills for a balanced life</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Essential Life Skills</h2>
              <p className="text-gray-600 mb-6">
                Time management and mental health are foundational skills that impact every aspect of your life. 
                Learning to manage your time effectively while maintaining mental wellness sets you up for 
                long-term success and happiness.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Clock size={24} />, title: "Time Management", desc: "Prioritize tasks and manage schedules effectively" },
                  { icon: <Brain size={24} />, title: "Mental Wellness", desc: "Develop healthy coping strategies and mindfulness" },
                  { icon: <Heart size={24} />, title: "Self-Care", desc: "Build sustainable habits for physical and emotional health" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-purple-600">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
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
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Wellness and mindfulness"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Wellness Quiz</h2>
            
            {!showResults ? (
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Question {currentQuiz + 1} of {quizzes.length}</span>
                    <span>{Math.round(((currentQuiz) / quizzes.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuiz) / quizzes.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-6">{quizzes[currentQuiz].question}</h3>
                
                <div className="space-y-3">
                  {quizzes[currentQuiz].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-6">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                  <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                  <p className="text-xl">You scored {score} out of {quizzes.length}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-4">Key Wellness Principles:</h4>
                  <ul className="text-left space-y-2">
                    <li>• Prioritize tasks using the Eisenhower Matrix</li>
                    <li>• Practice mindfulness and stress management</li>
                    <li>• Maintain healthy boundaries and self-care</li>
                    <li>• Seek support when needed</li>
                    <li>• Balance work, rest, and recreation</li>
                  </ul>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setCurrentQuiz(0)
                    setAnswers([])
                    setShowResults(false)
                  }}
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Retake Quiz
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}