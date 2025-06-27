import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import { Button, Card, Form } from 'react-bootstrap';

function Quiz() {
  const {
    quizData,
    currentQuestion,
    selectedAnswers,
    checkAnswer,
    next,
    isCompleted
  } = useContext(QuizContext);

  const [currentQ, setCurrentQ] = useState(null); // local state để hiển thị

  useEffect(() => {
    if (quizData.length > 0) {
      setCurrentQ(quizData[currentQuestion]);
    }
  }, [quizData, currentQuestion]);

  if (!currentQ) return <p>Loading...</p>;

  if (isCompleted) {
    const score = Object.keys(selectedAnswers).filter(
      (i) => quizData[i]?.correctAnswer === selectedAnswers[i]
    ).length;
    return (
      <div className="container mt-4 text-center">
        <h2>Quiz Completed!</h2>
        <h4>Your Score: {score} / {quizData.length}</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Card>
        <Card.Body>
          <Card.Title>Question {currentQuestion + 1}</Card.Title>
          <Card.Text>{currentQ.question}</Card.Text>

          <Form>
            {currentQ.answers.map((ans, i) => (
              <Form.Check
                key={i}
                type="radio"
                name="answer"
                label={ans}
                value={ans}
                checked={selectedAnswers[currentQuestion] === ans}
                onChange={() => checkAnswer(currentQuestion, ans)}
              />
            ))}
          </Form>

          <Button
            variant="danger"
            onClick={next}
            disabled={!selectedAnswers[currentQuestion]}
            className="mt-3"
          >
            {currentQuestion + 1 < quizData.length ? 'Next' : 'Submit'}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Quiz;
