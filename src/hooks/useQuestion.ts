import { useState } from 'react';
import {Question} from './../Question'

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

export const useQuestion = (initalQuestion: Question) => {  
  const [question, setQuestion] = useState<Question>(initalQuestion)
  const [placeHolderIsFirst, setPlaceHolderIsFirst] = useState<boolean>(false)

  const nextQuestion = () => {
    const newQuestion = {
      ...question,
      RandomNumber: getRandomInt(20)
    }

    setPlaceHolderIsFirst(getRandomInt(1) === 1)
    setQuestion(newQuestion)
  }

  const setPlaceholder = (placeholder: number) => {
    const newQuestion = {
      ...question,
      Placeholder: placeholder
    }

    setQuestion(newQuestion)
  }

  const stringifyQuestion = () => {
    if (!placeHolderIsFirst) {
      return `${question.RandomNumber} ${question.Operator} ${question.Placeholder}` 
    }

    return `${question.Placeholder} ${question.Operator} ${question.RandomNumber}` 
  }
  
  return {stringifyQuestion, nextQuestion, question, setPlaceholder};
};
