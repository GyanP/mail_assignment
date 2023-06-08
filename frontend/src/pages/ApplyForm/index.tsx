import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { generateLeadApi } from "../../apis";
import { toast } from "react-toastify";
import styles from "./ApplyForm.module.css";
import { IGenerateLeadModal } from "../../models";

interface IError {
    fullName: string;
    email: string;
    message: string;
}

const ApplyForm = () => {
    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errors, setErrors] = useState<IError>({
        fullName: "",
        email: "",
        message: ""
    });

    const resetForm = () => {
        // setFullName("");
        // setEmail("");
        // setMessage("");
    }

    const handleChange = (target: any) => {
        const { name, value } = target;
        let _errors = JSON.parse(JSON.stringify(errors));
        _errors[name] = "";
        setErrors(_errors);
        switch (name) {
            case "fullName":
                setFullName(value);
                return;
            case "email":
                setEmail(value);
                return;
            case "message":
                setMessage(value);
                return;
            default:
                break;
        }
    }

    const validate = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        let hasError = false;
        let _errors: IError = {
            fullName: "",
            email: "",
            message: "",
        };
        if (fullName.trim() === "") {
            hasError = true;
            _errors = { ..._errors, fullName: "Field cannot be empty" };
        } else if (fullName?.length < 2) {
            hasError = true;
            _errors = { ..._errors, fullName: "Please enter a valid name" };
        }
        if (email.trim() === "") {
            hasError = true;
            _errors = { ..._errors, email: "Field cannot be empty" };
        } else if (!emailRegex.test(email)) {
            hasError = true;
            _errors = { ..._errors, email: "Please enter a valid Email" };
        }
        if (message.trim() === "") {
            hasError = true;
            _errors = { ..._errors, message: "Field cannot be empty" };
        }

        setErrors(_errors);
        return hasError;
    };

    const handleSubmit = () => {
        if (!validate()) {
            let data: IGenerateLeadModal = {
                email,
                name: fullName,
                message
            };
            generateLeadApi(data, (_data: any) => {
                resetForm();
                toast.success(_data.message)
            }, (error: any) => {
                Object.keys(error).map((ele) => {
                    toast.error(error[ele][0]);
                    return ele;
                })
            })
        }
    }

    return (
        <Row className={`${styles.wrapper}`} >
            <Col className={`${styles.innerWrapper}`} xs={11} md={6} lg={4} >
                <Form.Group
                    as={Col}
                    className="mx-auto text-start mb-3"
                    controlId="validationFormik06"
                >
                    <Form.Label className="pb-1">Full name *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First and last name"
                        name="fullName"
                        onChange={(e) => handleChange(e.target)}
                        value={fullName}
                        isInvalid={errors.fullName !== ""}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.fullName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="mx-auto text-start mb-3"
                    controlId="validationFormik01"
                >
                    <Form.Label className="pb-1">Email *</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="example@example.com"
                        name="email"
                        value={email}
                        onChange={(e) => handleChange(e.target)}
                        isInvalid={errors.email !== ""}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="mx-auto text-start mb-3"
                    controlId="validationFormik02"
                >
                    <Form.Label className="pb-1">Message *</Form.Label>
                    <Form.Control
                        type="text"
                        as={"textarea"}
                        placeholder="Write your message here"
                        name="message"
                        value={message}
                        onChange={(e) => handleChange(e.target)}
                        isInvalid={errors.message !== ""}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    type="button"
                    onClick={handleSubmit}
                    className="btn-signup btn btn-dark my-3"
                >
                    Apply
                </Button>
            </Col>
        </Row>
    )
}

export { ApplyForm };