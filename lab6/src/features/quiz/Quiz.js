// src/features/quiz/Quiz.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer, submitQuiz, resetQuiz } from './quizSlice';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
  Alert,
} from 'react-bootstrap';

export default function Quiz() {
  const dispatch = useDispatch();
  const { questions, submitted } = useSelector((state) => state.quiz);

  const handleSelect = (questionId, answer) => {
    dispatch(selectAnswer({ questionId, answer }));
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
  };

  const handleReset = () => {
    dispatch(resetQuiz());
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">📝 React-Redux Quiz</h2>
          {questions.map((q, index) => (
            <Card key={q.id} className="mb-4 shadow-sm border-0">
              <Card.Body>
                <Card.Title>
                  <span className="me-2">Câu {index + 1}:</span>
                  {q.question}
                  {submitted && (
                    <Badge
                      bg={
                        q.selectedAnswer === q.correctAnswer
                          ? 'success'
                          : 'danger'
                      }
                      className="ms-2"
                    >
                      {q.selectedAnswer === q.correctAnswer
                        ? 'Đúng'
                        : 'Sai'}
                    </Badge>
                  )}
                </Card.Title>
                <Form>
                  {q.options.map((opt, i) => {
                    const isCorrect = submitted && opt === q.correctAnswer;
                    const isWrong =
                      submitted &&
                      opt === q.selectedAnswer &&
                      opt !== q.correctAnswer;

                    return (
                      <Form.Check
                        type="radio"
                        key={i}
                        id={`q${q.id}-opt${i}`}
                        name={`question-${q.id}`}
                        label={opt}
                        checked={q.selectedAnswer === opt}
                        disabled={submitted}
                        onChange={() => handleSelect(q.id, opt)}
                        className={`py-1 px-2 rounded ${
                          isCorrect
                            ? 'bg-success text-white'
                            : isWrong
                            ? 'bg-danger text-white'
                            : ''
                        }`}
                      />
                    );
                  })}
                </Form>
                {submitted && !q.selectedAnswer && (
                  <Alert variant="warning" className="mt-3">
                    Bạn chưa chọn đáp án nào cho câu này.
                  </Alert>
                )}
              </Card.Body>
            </Card>
          ))}

          <div className="text-center">
            {!submitted ? (
              <Button size="lg" onClick={handleSubmit} variant="primary">
                ✅ Nộp bài
              </Button>
            ) : (
              <Button size="lg" onClick={handleReset} variant="secondary">
                🔁 Làm lại
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
