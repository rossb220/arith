import React from 'react'

interface StatusProps {
  isCorrect: boolean
}

export default function Status({ isCorrect }: StatusProps) {
  return isCorrect ? <p>Correct! &#128512;</p> : <p>Incorrect &#128533;</p>
}