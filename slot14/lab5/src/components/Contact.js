import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    terms: false,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (formElement.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container className="my-4">
      <h2>Contact Form</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row">
          <Form.Group className="col-md-4 mb-3" controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="col-md-4 mb-3" controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="col-md-4 mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
              isInvalid={validated && !form.username}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className="row">
          <Form.Group className="col-md-4 mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="City"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="col-md-4 mb-3" controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="State"
              name="state"
              value={form.state}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="col-md-4 mb-3" controlId="zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Zip"
              name="zip"
              value={form.zip}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="terms">
          <Form.Check
            required
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}

export default Contact;
