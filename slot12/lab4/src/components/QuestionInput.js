import React, { useState, useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import { Card, Form, Button } from 'react-bootstrap';

function QuestionInput() {
  const { addQuestion } = useContext(QuizContext);

  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAdd = () => {
    if (question && correctAnswer && answers.every((a) => a)) {
      addQuestion({ question, answers, correctAnswer });

      // Reset form
      setQuestion('');
      setAnswers(['', '', '']);
      setCorrectAnswer('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <Card className="mt-3">
      <Card.Body>
        <h5>Add a New Question</h5>
        <Form.Group>
          <Form.Label>Question</Form.Label>
          <Form.Control
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Group>

        {answers.map((ans, i) => (
          <Form.Group key={i}>
            <Form.Label>Answer {i + 1}</Form.Label>
            <Form.Control
              value={ans}
              onChange={(e) => {
                const updated = [...answers];
                updated[i] = e.target.value;
                setAnswers(updated);
              }}
            />
          </Form.Group>
        ))}

        <Form.Group>
          <Form.Label>Correct Answer</Form.Label>
          <Form.Control
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="mt-2" onClick={handleAdd}>
          Add Question
        </Button>
      </Card.Body>
    </Card>
  );
}

export default QuestionInput;
