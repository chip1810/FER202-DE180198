import React, { useReducer, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ListGroup,
  InputGroup,
} from "react-bootstrap";

const initialState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, name: action.payload.name }
            : item
        ),
      };
    case "SORT_BY_NAME":
      return {
        ...state,
        items: [...state.items].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };
    case "SORT_BY_TIME":
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.id - b.id),
      };
    default:
      return state;
  }
}

function AdvancedItemList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [sortMethod, setSortMethod] = useState("SORT_BY_NAME");
  const [filter, setFilter] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() === "") return;
    dispatch({
      type: "ADD_ITEM",
      payload: { id: Date.now(), name: newItem.trim() },
    });
    setNewItem("");
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditValue(item.name);
  };

  const handleSave = (id) => {
    if (editValue.trim() !== "") {
      dispatch({
        type: "UPDATE_ITEM",
        payload: { id, name: editValue.trim() },
      });
    }
    setEditId(null);
    setEditValue("");
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortMethod(value);
    dispatch({ type: value });
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="mx-auto">
          <Form.Group>
            <Form.Label>Enter Item:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter item name"
              />
              <Button onClick={handleAddItem}>Add Item</Button>
            </InputGroup>
          </Form.Group>

          <Form.Select
            className="mb-3"
            value={sortMethod}
            onChange={handleSortChange}
          >
            <option value="SORT_BY_NAME">Sort by Name</option>
            <option value="SORT_BY_TIME">Sort by Created Time</option>
          </Form.Select>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search items..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </InputGroup>

          <ListGroup>
            {filteredItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {editId === item.id ? (
                  <>
                    <Form.Control
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="mb-2"
                    />
                    <div className="d-flex gap-2">
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => handleSave(item.id)}
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setEditId(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{item.name}</span>
                    <div className="d-flex gap-2">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default AdvancedItemList;
