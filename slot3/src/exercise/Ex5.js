import React from 'react';

const employees = [
  { name: "Anna" }, { name: "Brian" }, { name: "Clara" },
  { name: "Ann" }, { name: "Elisabeth" }
];

export default function Exercise5() {
  return (
    <>
      <h2>Exercise 5 – Dropdown Menu</h2>
      <select>
        {employees.map((e, i) => (
          <option key={i}>{e.name}</option>
        ))}
      </select>
    </>
  );
}
