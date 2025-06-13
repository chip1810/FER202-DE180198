import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

function SearchFilter() {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];
  const [search, setSearch] = useState('');

  const filtered = items.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="my-4">
      <Form.Control
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ListGroup className="mt-3">
        {filtered.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
export default SearchFilter;
