import React from 'react';

const employees = [
  { age: 50 }, { age: 40 }, { age: 19 }, { age: 22 }, { age: 16 }
];

export default function Exercise9() {
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return (
    <>
      <h2>Exercise 9 – Any Teenager?</h2>
      <p>{isTeenager.toString()}</p>
    </>
  );
}
