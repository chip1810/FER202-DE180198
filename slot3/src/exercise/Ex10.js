import React, { useState } from 'react';

const employees = [
  { name: "Anna", department: "HR" },
  { name: "Brian", department: "IT" },
  { name: "Clara", department: "Finance" },
  { name: "Ann", department: "Finance" },
  { name: "Elisabeth", department: "HR" }
];

export default function Exercise10() {
  const [query, setQuery] = useState("");

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <h2>Exercise 10 – Search by Name</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map((e, i) => (
          <li key={i}>{e.name} - {e.department}</li>
        ))}
      </ul>
    </>
  );
}
