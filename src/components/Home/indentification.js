// Identification.js
import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import MemberForm from './MemberForm'; 

const Identification = ({ onSubmission }) => {
  const [formData, setFormData] = useState({
    التسمية: '',
    القطاع: '',
    الغرض_الرئيسي: '',
    الاعضاء: [], 
    capitale: '',
    blockage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMemberChange = (index, memberData) => {
    const updatedMembers = [...formData.الاعضاء];
    updatedMembers[index] = memberData;

    setFormData({
      ...formData,
      الاعضاء: updatedMembers,
    });
  };

  const handleAddMember = () => {
    setFormData({
      ...formData,
      الاعضاء: [...formData.الاعضاء, { الاسم: '', CIN: '', الصفة: '', la_part: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmission(formData);
    
    setFormData({
      التسمية: '',
      القطاع: '',
      الغرض_الرئيسي: '',
      الاعضاء: [],
      capitale: '',
      blockage: '',
    });
  };

  return (
    <div className="content-container">
      <h2>Identification</h2>
      <Form onSubmit={handleSubmit}>
        
        <Form.Group as={Row} controlId="formLabel">
          <Form.Label column sm="3">
            التسمية:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Enter التسمية"
              name="التسمية"
              value={formData.التسمية}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} controlId="formSector">
          <Form.Label column sm="3">
            القطاع:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Enter القطاع"
              name="القطاع"
              value={formData.القطاع}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

       
        <Form.Group as={Row} controlId="formPurpose">
          <Form.Label column sm="3">
            الغرض الرئيسي:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Enter الغرض الرئيسي"
              name="الغرض_الرئيسي"
              value={formData.الغرض_الرئيسي}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        
        <Form.Group as={Row} controlId="formCapital">
          <Form.Label column sm="3">
            capitale:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Enter capitale"
              name="capitale"
              value={formData.capitale}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>

        
        <Form.Group as={Row} controlId="formBlockage">
          <Form.Label column sm="3">
            blockage:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              placeholder="Enter blockage"
              name="blockage"
              value={formData.blockage}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        
        <Button variant="primary" onClick={handleAddMember}>
          Add Member
        </Button>

        {/* Render MemberForm for each member */}
        {formData.الاعضاء.map((member, index) => (
          <MemberForm key={index} member={member} onMemberChange={(memberData) => handleMemberChange(index, memberData)} />
        ))}

        {/* Existing form fields... */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Identification;
