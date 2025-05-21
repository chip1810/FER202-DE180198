import React from 'react';

const averageAge = (...ages) => {
  const sum = ages.reduce((a, b) => a + b, 0);
  return (sum / ages.length).toFixed(1);
};

const employees = [
  { age: 50 }, { age: 40 }, { age: 19 }, { age: 22 }, { age: 16 }
];

export default function Exercise4() {
  return (
    <>
      <h2>Exercise 4 – Average Age</h2>
      <p>Average Age: {averageAge(...employees.map(e => e.age))}</p>
    </>
  );
}
