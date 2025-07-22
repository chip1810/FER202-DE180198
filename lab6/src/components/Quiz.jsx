import { Routes, Route } from 'react-router-dom';
import QuizPage from '../features/quiz/QuizPage';
import QuizOverview from '../features/quiz/QuizOverview';
import QuizResult from '../features/quiz/QuizResult';

export default function Quiz() {
  return (
    <Routes>
      <Route path="" element={<QuizPage />} />
      <Route path="overview" element={<QuizOverview />} />
      <Route path="result" element={<QuizResult />} />
    </Routes>
  );
} 
