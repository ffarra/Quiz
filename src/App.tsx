import React from "react";
import './App.css';
import {useReducer} from "react";
import {questions} from "./data/questions";

interface InState {
  currentQuestion: number
  showScore: boolean
  score: number
}

interface Action {
  type: string
  payload?: number | boolean
}


const initialState: InState = {
  currentQuestion: 0,
  showScore: false,
  score: 0
};

function reducer(state: InState, action: Action) {
  switch (action.type) {
    case 'repeatQuiz':
      return initialState;
    case 'handleAnswersClick':
      let newState = {...state};
      const nextQuestion = newState.currentQuestion + 1;

      if (action.payload){
        newState.score = newState.score + 1;
      }

      if (nextQuestion < questions.length) {
        newState.currentQuestion = nextQuestion
      } else {
        newState.showScore = true
      }
      return newState;
    default:
      throw new Error();
  }
}

 function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <div className='App'>
        {state.showScore ? (
            <div className='refresh'>
              <div className='score-section'>
                You scored {state.score} out of {questions.length}
              </div>
              <button onClick={() => dispatch({type: 'repeatQuiz'})}>Repeat</button>
            </div>
          ) : (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {state.currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[state.currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[state.currentQuestion].answerOptions.map((answers) => (
                    <button onClick={() => dispatch({type: 'handleAnswersClick', payload: answers.isCorrect})}>{answers.answerText}</button>
                ))}
              </div>
            </>
        )}
      </div>
  );
}

export default App