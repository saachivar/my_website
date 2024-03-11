
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

    const Contact = () => {
        const [formData, setFormData] = useState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      
        const handleChange = e => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = e => {
          e.preventDefault();
          // Here you can add your logic to handle form submission, like sending an email.
          console.log(formData);
          // Reset form fields
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        };
      
        return (
          <div className='contact-form'>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
        
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
        
              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject"
                  required
                />
              </Form.Group>
        
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                />
              </Form.Group>
        
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>  
        );
      };

    export default Contact;