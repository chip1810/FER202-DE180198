// Bước 2: quizSlice.js (cập nhật thêm goToQuestion)
// src/features/quiz/quizSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['javascript', 'scripting', 'script', 'js'],
      correctAnswer: 'script',
      selectedAnswer: null
    },
    {
      id: 2,
      question: 'What are variables used for in JavaScript Programs?',
      options: [
        'Storing numbers, dates, or other values',
        'Varying randomly',
        'Causing high-school algebra flashbacks',
        'None of these'
      ],
      correctAnswer: 'Storing numbers, dates, or other values',
      selectedAnswer: null
    }
  ],
  currentQuestionIndex: 0,
  submitted: false
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer(state, action) {
      const { questionId, answer } = action.payload;
      const q = state.questions.find(q => q.id === questionId);
      if (q) q.selectedAnswer = answer;
    },
    goNext(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      }
    },
    goPrev(state) {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
      }
    },
    goFirst(state) {
      state.currentQuestionIndex = 0;
    },
    goLast(state) {
      state.currentQuestionIndex = state.questions.length - 1;
    },
    goToQuestion(state, action) {
      const index = action.payload;
      if (index >= 0 && index < state.questions.length) {
        state.currentQuestionIndex = index;
      }
    },
    submitQuiz(state) {
      state.submitted = true;
    },
    resetQuiz(state) {
      state.questions.forEach(q => (q.selectedAnswer = null));
      state.submitted = false;
      state.currentQuestionIndex = 0;
    }
  }
});

export const {
  selectAnswer,
  goNext,
  goPrev,
  goFirst,
  goLast,
  goToQuestion,
  submitQuiz,
  resetQuiz
} = quizSlice.actions;

export default quizSlice.reducer;