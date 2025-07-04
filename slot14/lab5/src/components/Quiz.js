import { quizQuestions } from '../data/quizData';
import Question from '../components/Question';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
  let correctCount = 0;
  quizQuestions.forEach((q) => {
    if (
      (q.id === 3 && answers[q.id]) || 
      (q.id !== 3 && answers[q.id] === q.correctAnswer)
    ) {
      correctCount++;
    }
  });
  setScore(correctCount);
};

  return (
    <Container>
      <h2>Quiz</h2>
      {quizQuestions.map((q) => (
        <Question key={q.id} data={q} onAnswer={handleAnswer} />
      ))}

      <button onClick={handleSubmit}>Submit</button>

      {score !== null && (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>

          Bạn đúng {score} trên {quizQuestions.length} câu.

        </div>
      )}
    </Container>
  );
}

export default Quiz;
