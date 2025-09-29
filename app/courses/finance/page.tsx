'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, DollarSign, TrendingUp, PiggyBank } from 'lucide-react'
import Image from 'next/image'

export default function FinancialLiteracy() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)

  const quizzes = [
    {
      question: "What is the 50/30/20 budgeting rule?",
      options: ["50% savings, 30% needs, 20% wants", "50% needs, 30% wants, 20% savings", "50% wants, 30% needs, 20% savings", "50% investments, 30% savings, 20% spending"],
      correct: 1
    },
    {
      question: "What is compound interest?",
      options: ["Interest paid only on principal", "Interest earned on interest", "A type of loan", "A banking fee"],
      correct: 1
    },
    {
      question: "Which is generally considered a good investment strategy?",
      options: ["Put all money in one stock", "Diversify your portfolio", "Only invest in cryptocurrency", "Keep all money in cash"],
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Financial Literacy</h1>
            <p className="text-xl text-green-100">Build essential money management skills</p>
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
              <h2 className="text-3xl font-bold mb-6">Financial Basics</h2>
              <p className="text-gray-600 mb-6">
                Financial literacy is understanding how money works - how to earn, manage, invest, and spend it wisely. 
                These skills are essential for achieving financial security and reaching your life goals.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <PiggyBank size={24} />, title: "Budgeting", desc: "Track income and expenses effectively" },
                  { icon: <TrendingUp size={24} />, title: "Investing", desc: "Grow your money over time" },
                  { icon: <DollarSign size={24} />, title: "Saving", desc: "Build emergency funds and reach goals" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-green-600">{item.icon}</div>
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Financial Planning"
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
            <h2 className="text-3xl font-bold mb-8 text-center">Financial Literacy Quiz</h2>
            
            {!showResults ? (
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Question {currentQuiz + 1} of {quizzes.length}</span>
                    <span>{Math.round(((currentQuiz) / quizzes.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
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
                      className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
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
                  <h4 className="font-semibold mb-4">Key Financial Principles:</h4>
                  <ul className="text-left space-y-2">
                    <li>• Follow the 50/30/20 budgeting rule</li>
                    <li>• Start saving and investing early</li>
                    <li>• Understand compound interest</li>
                    <li>• Diversify your investments</li>
                    <li>• Build an emergency fund</li>
                  </ul>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setCurrentQuiz(0)
                    setAnswers([])
                    setShowResults(false)
                  }}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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