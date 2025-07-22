import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAnswer,
  goNext,
  goPrev,
  goFirst,
  goLast,
  submitQuiz
} from './quizSlice';
import { useNavigate } from 'react-router-dom';

export default function QuizPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentQuestionIndex, questions } = useSelector((state) => state.quiz);
  const q = questions[currentQuestionIndex];

  return (
    <Container className="my-5">
      <Card className="text-center shadow">
        <Card.Header as="h3">JavaScript Quiz</Card.Header>
        <Card.Body>
          <h5 className="text-start fw-bold mb-4">
            Q.{q.id} {q.question}
          </h5>
          <Row>
            {q.options.map((opt, i) => (
              <Col sm={6} key={i} className="mb-3">
                <div className="p-2 bg-primary-subtle rounded">
                  <Form.Check
                    type="radio"
                    name={`q-${q.id}`}
                    label={opt}
                    id={`q${q.id}-opt${i}`}
                    value={opt}
                    checked={q.selectedAnswer === opt}
                    onChange={() =>
                      dispatch(selectAnswer({ questionId: q.id, answer: opt }))
                    }
                  />
                </div>
              </Col>
            ))}
          </Row>

          <div className="mt-4 d-flex justify-content-center gap-2">
  <Button variant="primary" onClick={() => dispatch(goFirst())}>
    First
  </Button>
  <Button variant="primary" onClick={() => dispatch(goPrev())}>
    Prev
  </Button>
  <Button variant="primary" onClick={() => dispatch(goNext())}>
    Next
  </Button>
  <Button variant="primary" onClick={() => dispatch(goLast())}>
    Last
  </Button>
  <Button variant="info" onClick={() => navigate('/quiz/overview')}>
    Overview
  </Button>
  <Button
    variant="success"
    onClick={() => {
      dispatch(submitQuiz());
navigate('/quiz/result');
    }}
  >
    Submit
  </Button>
</div>

        </Card.Body>
      </Card>
    </Container>
  );
}
