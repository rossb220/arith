import React, { useEffect } from 'react';
import { useStitcher } from './hooks/useStitcher';
import { useQuestion, getRandomInt } from './hooks/useQuestion';
import { useScorer } from './hooks/useScorer';
import Status from './Status';

import './App.css';

function App() {
  const { isCorrect, calculate, clear } = useScorer()
  const { finalValue, stitchValue, clearValue } = useStitcher()
  const { stringifyQuestion, nextQuestion, question, setPlaceholder } = useQuestion({ Operator: "*", Placeholder: 3, RandomNumber: getRandomInt(20) });

  useEffect(() => {
    if (isCorrect) {
      window.setTimeout(() => {
        nextQuestion()
        clear()
        clearValue()
      }, 750);
    }
  }, [isCorrect])


  return (
    <div className="app">
      <div className="placeholder">
        <select value={question.Placeholder} onChange={(e: React.FormEvent<HTMLSelectElement>) => {
          setPlaceholder(+e.currentTarget.value)
        }}>
          {[...Array(13)].map((e, i) => {
            return <option value={i}>{i}</option>
          })}
        </select>
      </div>
      <div className="question">
        <h3>Question: {stringifyQuestion()}</h3>
      </div>

      <div className="answer">
        <h3>Answer: {finalValue}</h3>
        {isCorrect !== null && <Status isCorrect={isCorrect} />}
      </div>
      <div className="controls">
        <div className='controls__section'>
          {[...Array(10)].map((e, i) => {
            return <button type="button" className="btn" key={i} onClick={() => {
              stitchValue(String(i))
            }}> {i}</button>
          })}
        </div>
        <div className="controls__section">
          <button type="button" className='btn' onClick={() => {
            clearValue()
            clear()
          }}>
            Clear</button>
          <button type="button" className='btn' onClick={() => {
            nextQuestion()
            clear()
            clearValue()
          }}>
            Next Question
            </button>
          <button type="button" className='btn' onClick={() => {
            calculate(question, finalValue)
          }}
          >
            Answer
         </button>
        </div>

      </div>
    </div>
  );
}

export default App;
