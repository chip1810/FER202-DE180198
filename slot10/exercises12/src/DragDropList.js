import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

function DragDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragEnter = (index) => {
    if (draggingIndex === null || draggingIndex === index) return;
    const newItems = [...items];
    const draggedItem = newItems.splice(draggingIndex, 1)[0];
    newItems.splice(index, 0, draggedItem);
    setDraggingIndex(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div className="my-4">
      <ListGroup>
        {items.map((item, index) => (
          <ListGroup.Item
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            style={{ cursor: 'move' }}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
export default DragDropList;
