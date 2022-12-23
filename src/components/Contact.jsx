import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => (
    <Form id='contact' className='contact-form  mx-auto'>
        <h2 className='section-title'>Contact Me</h2>

        <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label className='mb-2'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                Enter your email address here.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicName" className="mb-3">
            <Form.Label className='mb-2'>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage" className="mb-3">
            <Form.Label className='mb-2'>Message</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Enter your message" />
        </Form.Group>

        <Button className="btn-lg" variant="primary" type="submit">
            Submit
        </Button>
    </Form>
);

export default Contact;
