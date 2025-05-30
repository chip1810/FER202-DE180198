import React from 'react';

const employees = [
  { name: "Anna", department: "HR" },
  { name: "Brian", department: "IT" },
  { name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" }
];

export default function Exercise6() {
  const itEmployees = employees.filter(e => e.department === "IT");

  return (
    <>
      <h2>Exercise 6 – IT Department Employees</h2>
      <ul>
        {itEmployees.map((e, i) => (
          <li key={i}>{e.name}</li>
        ))}
      </ul>
    </>
  );
}
