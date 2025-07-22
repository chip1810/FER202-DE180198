import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { goToQuestion, submitQuiz } from './quizSlice';
import { useNavigate } from 'react-router-dom';

export default function QuizOverview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions } = useSelector((state) => state.quiz);

const handleJumpTo = (index) => {
  dispatch(goToQuestion(index));
  navigate('/quiz'); // đúng route
};


  const handleSubmit = () => {
    dispatch(submitQuiz());
navigate('/quiz/result');
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Quiz Overview</h2>
      <Row>
        {questions.map((q, index) => (
          <Col key={q.id} sm={6} md={4} lg={3} className="mb-3">
            <Card
              className="p-3 text-center bg-light shadow-sm hoverable"
              style={{ cursor: 'pointer' }}
              onClick={() => handleJumpTo(index)}
            >
              <h6>Question No {q.id}</h6>
              <div className={q.selectedAnswer ? 'text-success' : 'text-danger'}>
                {q.selectedAnswer ? 'Answered' : 'Not Answered'}
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4 d-flex flex-wrap justify-content-center gap-2">
        <Button variant="success" onClick={() => navigate('/')}>Go to Quiz</Button>
        <Button variant="success" onClick={handleSubmit}>Submit Quiz</Button>
      </div>
    </Container>
  );
}