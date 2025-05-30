import React from 'react';

const employees = [
  { id: 1, name: "Anna", department: "HR" },
  { id: 2, name: "Brian", department: "IT" },
  { id: 3, name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" }
];

export default function Exercise3() {
  return (
    <>
      <h2>Exercise 3 – Employee Table</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, i) => (
            <tr key={e.id || i}>
              <td>{e.id || i}</td>
              <td>{e.name}</td>
              <td>{e.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
