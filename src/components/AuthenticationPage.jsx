import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './App.css';

function AuthenticationPage() {
  const [dob, setDob] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 18) {
      setVerificationResult('Warning: You must be 18 years or older to work in the mines.');
    } else {
      setVerificationResult('You are eligible to work.');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Aadhar Age Verification</h2>
        <p>
          We aim to demolish child labor by integrating Aadhar authentication. This system ensures that only individuals above 18 years old can work in the mines. Strict actions will be taken against those who violate this rule.
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formAadharNumber">
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Aadhar Number" />
          </Form.Group>
          <Form.Group controlId="formDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Verify
          </Button>
        </Form>
        <div className="verification-result">
          {verificationResult}
        </div>
      </div>
    </div>
  );
}

export default AuthenticationPage;
