import { useState } from 'react';
import {Question} from './../Question'

export const useScorer = () => {  
  const [isCorrect, setIsCorrect] = useState<boolean|null>(null)
  
  const calculate = (question: Question, finalValue: string) => {
    //TODO: Implement operator map here
    const correctAnswer = question.Placeholder * question.RandomNumber
    const answer = parseInt(finalValue)
    if (correctAnswer === answer) {
      setIsCorrect(true)

      return
    }

    setIsCorrect(false)
  }

  const clear = () => setIsCorrect(null)
  
  return {isCorrect, clear, calculate};
};
