// MemberForm.js
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const MemberForm = ({ member, onMemberChange }) => {
  const handleMemberInputChange = (e) => {
    const { name, value } = e.target;
    onMemberChange({
      ...member,
      [name]: value,
    });
  };

  return (
    <>
      <Form.Group as={Row} controlId="formMemberName">
        <Form.Label column sm="3">
            : الاسم
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter الاسم"
            name="الاسم"
            value={member.الاسم}
            onChange={handleMemberInputChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formMemberCIN">
        <Form.Label column sm="3">
          CIN:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter CIN"
            name="CIN"
            value={member.CIN}
            onChange={handleMemberInputChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formMemberRole">
        <Form.Label column sm="3">
          : الصفة
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter الصفة"
            name="الصفة"
            value={member.الصفة}
            onChange={handleMemberInputChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formMemberLaPart">
        <Form.Label column sm="3">
          la part:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            placeholder="Enter la part"
            name="la_part"
            value={member.la_part}
            onChange={handleMemberInputChange}
          />
        </Col>
      </Form.Group>
      {/* Add other member fields here as needed */}
    </>
  );
};

export default MemberForm;
