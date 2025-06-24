import React, { useState } from 'react';
import { quizData } from './data/quizData';
import './Quiz.css'; // Nếu bạn muốn custom thêm CSS

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    const current = quizData[currentQuestion];

    if (selectedAnswer === current.correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (isCompleted) {
    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ color: 'crimson' }}>Quiz Completed!</h1>
        <h3>Your score: {score}</h3>
      </div>
    );
  }

  const current = quizData[currentQuestion];

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      width: '400px',
      borderRadius: '8px'
    }}>
      <h3 style={{ color: 'crimson' }}>Question {currentQuestion + 1}</h3>
      <p>{current.question}</p>
      {current.answers.map((ans, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name="answer"
              value={ans}
              checked={selectedAnswer === ans}
              onChange={() => setSelectedAnswer(ans)}
            />
            {' '}
            {ans}
          </label>
        </div>
      ))}
      <button
        onClick={handleNext}
        disabled={!selectedAnswer}
        style={{
          marginTop: '10px',
          backgroundColor: 'crimson',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;
