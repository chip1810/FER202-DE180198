import React from 'react';

function Question({ data, onAnswer, current, total }) {
  return (
    <div>
      <h3>Question {current} of {total}</h3>
      <p>{data.question}</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {data.options.map((option, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            <button onClick={() => onAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
