import React, { useState, useReducer } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

// Trạng thái ban đầu
const initialState = {
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    agreed: false,
    isSubmitted: false,
};

// Reducer
const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value };
        case "TOGGLE_AGREEMENT":
            return { ...state, agreed: !state.agreed };
        case "SUBMIT":
            return { ...state, isSubmitted: true };
        default:
            return state;
    }
};

const MyForm = ({ title, onSubmit }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_FIELD", field: name, value });
    };

    const handleValidation = () => {
        const newErrors = {};

        // Tên
        if (!state.name.trim()) newErrors.name = "Tên không được để trống!";
        else if (state.name.length < 3 || state.name.length > 50) {
            newErrors.name = "Tên phải từ 3 đến 50 ký tự!";
        }

        // Tuổi
        const age = parseInt(state.age);
        if (!state.age) newErrors.age = "Tuổi không được để trống!";
        else if (isNaN(age) || age < 18 || age > 100) {
            newErrors.age = "Tuổi phải từ 18 đến 100!";
        }

        // Email
        if (!state.email.trim()) newErrors.email = "Email không được để trống!";
        else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(state.email)) {
            newErrors.email = "Email không hợp lệ!";
        }

        // Số điện thoại
        if (!state.phone.trim()) newErrors.phone = "Số điện thoại không được để trống!";
        else if (!/^\d{10,15}$/.test(state.phone)) {
            newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";
        }

        if (!state.gender) newErrors.gender = "Vui lòng chọn giới tính!";

        // Đồng ý điều khoản
        if (!state.agreed) newErrors.agreed = "Bạn phải đồng ý với điều khoản!";

        setErrors(newErrors);
        setShowAlert(Object.keys(newErrors).length > 0);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            dispatch({ type: "SUBMIT" });
            onSubmit(state);
        }
    };

    return (
        <Container>
            <h3>{title}</h3>

            {showAlert && (
                <Alert variant="danger">
                    <strong>Lỗi:</strong> Vui lòng kiểm tra lại thông tin bên dưới.
                </Alert>
            )}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formAge">
                    <Form.Label>Tuổi</Form.Label>
                    <Form.Control
                        type="number"
                        name="age"
                        value={state.age}
                        onChange={handleChange}
                        isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.age}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={state.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formGender">
                    <Form.Label>Giới tính</Form.Label>
                    <div>
                        <Form.Check
                            type="radio"
                            label="Nam"
                            name="gender"
                            value="Nam"
                            checked={state.gender === "Nam"}
                            onChange={handleChange}
                            inline
                        />
                        <Form.Check
                            type="radio"
                            label="Nữ"
                            name="gender"
                            value="Nữ"
                            checked={state.gender === "Nữ"}
                            onChange={handleChange}
                            inline
                        />
                    </div>
                    {errors.gender && (
                        <div className="text-danger mt-1">{errors.gender}</div>
                    )}
                </Form.Group>


                <Form.Group controlId="formAgreement">
                    <Form.Check
                        type="checkbox"
                        label="Tôi đồng ý với điều khoản"
                        checked={state.agreed}
                        onChange={() => dispatch({ type: "TOGGLE_AGREEMENT" })}
                        isInvalid={!!errors.agreed}
                        feedback={errors.agreed}
                        feedbackType="invalid"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Gửi
                </Button>
            </Form>
        </Container>
    );
};

MyForm.propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default MyForm;
