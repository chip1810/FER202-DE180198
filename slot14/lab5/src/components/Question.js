import { Card, Form } from 'react-bootstrap';
import { useState } from 'react';

function Question({ data, onAnswer }) {
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
    if (onAnswer) {
      onAnswer(data.id, e.target.value);
    }
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{data.question}</Card.Title>
        <Form>
          {data.options.map((opt, idx) => (
            <Form.Check
              type="radio"
              key={idx}
              label={opt}
              name={data.id} // nhóm radio theo id câu hỏi
              value={opt}
              checked={selected === opt}
              onChange={handleChange}
            />
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Question;
