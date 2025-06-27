import React from 'react';
import { QuizProvider } from './context/QuizContext';
import Quiz from './components/Quiz';
import QuestionInput from './components/QuestionInput';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <QuizProvider>
      <div className="container mt-4">
        <QuestionInput />

        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
