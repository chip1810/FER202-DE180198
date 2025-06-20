import React, { useReducer, useEffect, useRef } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null,
  timeLeft: 10,
  highScore: parseInt(localStorage.getItem("highScore") || "0"),
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect = action.payload === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        selectedOption: action.payload,
        feedback: isCorrect ? "correct" : "incorrect",
        score: isCorrect ? state.score + 1 : state.score,
      };

    case "NEXT_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      const isEnd = nextQuestion === state.questions.length;
      const updatedHighScore = Math.max(state.score, state.highScore);
      if (isEnd) {
        localStorage.setItem("highScore", updatedHighScore);
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        selectedOption: "",
        feedback: null,
        showScore: isEnd,
        timeLeft: 10,
        highScore: updatedHighScore,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: state.highScore,
      };

    case "TICK":
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };

    case "TIME_UP":
      return {
        ...state,
        selectedOption: "",
        feedback: "timeout",
      };

    default:
      return state;
  }
}

function EnhancedQuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback, timeLeft, highScore } = state;

  const timerRef = useRef();

  // Start timer
  useEffect(() => {
    if (showScore || selectedOption) return;

    timerRef.current = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [showScore, selectedOption]);

  // When time runs out
  useEffect(() => {
    if (timeLeft <= 0 && !selectedOption) {
      clearInterval(timerRef.current);
      dispatch({ type: "TIME_UP" });
    }
  }, [timeLeft, selectedOption]);

  const handleSelect = (option) => {
    if (!selectedOption) {
      clearInterval(timerRef.current);
      dispatch({ type: "SELECT_OPTION", payload: option });
    }
  };

  const handleNext = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestart = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  const currentQ = questions[currentQuestion];

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>🎯 Your Score: {score} / {questions.length}</h2>
            <h4>🏆 High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestart}>Restart Quiz</Button>
          </div>
        ) : (
          <div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5>Question {currentQuestion + 1}/{questions.length}</h5>
              <h5 style={{ color: timeLeft <= 5 ? "red" : "black" }}>
                Time Left: {timeLeft}s
              </h5>
            </div>
            <h4>{currentQ.question}</h4>

            <div className="mt-3">
              {currentQ.options.map((option, i) => (
                <Button
                  key={i}
                  variant={
                    selectedOption === option
                      ? (feedback === "correct" && option === currentQ.answer
                          ? "success"
                          : feedback === "incorrect" && option === selectedOption
                          ? "danger"
                          : "outline-secondary")
                      : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleSelect(option)}
                  disabled={!!selectedOption || feedback === "timeout"}
                >
                  {option}
                </Button>
              ))}
            </div>

            {feedback && (
              <div className="mt-3">
                {feedback === "correct" && (
                  <h5 className="text-success">
                    <FaCheckCircle /> Correct! 🎉
                  </h5>
                )}
                {feedback === "incorrect" && (
                  <h5 className="text-danger">
                    <FaTimesCircle /> Incorrect! The correct answer is <strong>{currentQ.answer}</strong>
                  </h5>
                )}
                {feedback === "timeout" && (
                  <h5 className="text-warning">
                    ⏰ Time's up! The correct answer is <strong>{currentQ.answer}</strong>
                  </h5>
                )}
                <Button className="mt-3" onClick={handleNext}>Next Question</Button>
              </div>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
}

export default EnhancedQuestionBank;
