'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, Gamepad2, Brain, Zap } from 'lucide-react'
import Image from 'next/image'

export default function InteractiveLearning() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const quizzes = [
    {
      question: "What makes interactive learning more effective than traditional methods?",
      options: ["It's more entertaining", "It engages multiple senses and promotes active participation", "It's easier for teachers", "It requires less preparation"],
      correct: 1
    },
    {
      question: "Which is an example of interactive learning?",
      options: ["Reading a textbook silently", "Listening to a lecture", "Participating in a simulation game", "Copying notes from the board"],
      correct: 2
    },
    {
      question: "How does gamification help in learning?",
      options: ["Makes everything a competition", "Increases motivation and engagement", "Replaces all traditional methods", "Only works for young children"],
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
            <h1 className="text-5xl font-bold text-white mb-6">Interactive Learning</h1>
            <p className="text-xl text-purple-100">Engage with dynamic, hands-on educational experiences</p>
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
              <h2 className="text-3xl font-bold mb-6">What is Interactive Learning?</h2>
              <p className="text-gray-600 mb-6">
                Interactive learning is an educational approach that actively engages students in the learning process 
                through hands-on activities, discussions, simulations, and multimedia experiences that make learning 
                more engaging and effective.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Gamepad2 size={24} />, title: "Gamification", desc: "Learning through games and challenges" },
                  { icon: <Brain size={24} />, title: "Active Engagement", desc: "Hands-on participation and problem-solving" },
                  { icon: <Zap size={24} />, title: "Immediate Feedback", desc: "Real-time responses and progress tracking" }
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
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Interactive Learning"
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
            <h2 className="text-3xl font-bold mb-8 text-center">Interactive Learning Quiz</h2>
            
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
                  <h4 className="font-semibold mb-4">Interactive Learning Benefits:</h4>
                  <ul className="text-left space-y-2">
                    <li>• Increases student engagement and motivation</li>
                    <li>• Improves knowledge retention</li>
                    <li>• Develops critical thinking skills</li>
                    <li>• Provides immediate feedback</li>
                    <li>• Accommodates different learning styles</li>
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