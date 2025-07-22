import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card } from 'react-bootstrap';

export default function QuizResult() {
  const { questions } = useSelector((state) => state.quiz);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Quiz Review</h2>
      {questions.map((q, i) => {
        const isCorrect = q.selectedAnswer === q.correctAnswer;
        return (
          <Card
            key={q.id}
            className={`mb-3 p-3 ${isCorrect ? 'bg-success-subtle' : 'bg-danger-subtle'}`}
          >
            <h5>
              Q{i + 1}. {q.question}
            </h5>
            <ul className="list-unstyled ms-3">
              {q.options.map((opt, idx) => (
                <li key={idx}>
                  <input
                    type="radio"
                    disabled
                    checked={q.selectedAnswer === opt}
                    readOnly
                  />{' '}
                  {opt}
                </li>
              ))}
            </ul>
            <div className="text-muted">
              Right answer is: <strong>{q.correctAnswer}</strong>
            </div>
          </Card>
        );
      })}
    </Container>
  );
}