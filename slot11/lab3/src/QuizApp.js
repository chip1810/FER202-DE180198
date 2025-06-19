import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "22"],
    correctAnswer: "4"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars"
  }
];

function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === quizData[currentIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React Quiz App</h2>
      {showResult ? (
        <Result score={score} total={quizData.length} onRestart={handleRestart} />
      ) : (
        <Question
          data={quizData[currentIndex]}
          current={currentIndex + 1}
          total={quizData.length}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizApp;
