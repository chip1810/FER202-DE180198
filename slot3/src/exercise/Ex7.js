import React from 'react';

const employees = [
  { name: "Anna", department: "HR" },
  { name: "Brian", department: "IT" },
  { name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" }
];

export default function Exercise7() {
  const sorted = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    return deptCompare !== 0 ? deptCompare : a.name.localeCompare(b.name);
  });

  return (
    <>
      <h2>Exercise 7 – Sorted Employees</h2>
      <ul>
        {sorted.map((e, i) => (
          <li key={i}>{e.name} - {e.department}</li>
        ))}
      </ul>
    </>
  );
}
