import React from 'react';

const employees = [
  { name: "Anna", department: "HR" },
  { name: "Brian", department: "IT" },
  { name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" }
];

export default function Exercise8() {
  const grouped = employees.reduce((acc, emp) => {
    acc[emp.department] = acc[emp.department] || [];
    acc[emp.department].push(emp);
    return acc;
  }, {});

  return (
    <>
      <h2>Exercise 8 – Grouped by Department</h2>
      {Object.entries(grouped).map(([dept, list]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {list.map((e, i) => (
              <li key={i}>{e.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
