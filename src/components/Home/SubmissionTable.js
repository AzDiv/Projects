import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import MemberForm from './MemberForm';
import SearchInput from './SearchInput';

const SubmissionTable = ({ submissions, setSubmissions }) => {
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modifiedSubmission, setModifiedSubmission] = useState({});
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(-1);

  const handleRowClick = (submission) => {
    setSelectedSubmission(submission);
  };

  const handleDelete = (index) => {
    const updatedSubmissions = [...submissions.slice(0, index), ...submissions.slice(index + 1)];
    setSubmissions(updatedSubmissions);
  };

  const handleModify = () => {
    setModifiedSubmission(selectedSubmission || {});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveModification = () => {
    const updatedSubmissions = [...submissions];
    const index = updatedSubmissions.findIndex((submission) => submission === selectedSubmission);
    updatedSubmissions[index] = modifiedSubmission;
    setSubmissions(updatedSubmissions);
    setShowModal(false);
  };

  const handleFieldChange = (fieldName, value) => {
    setModifiedSubmission((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleMemberSelect = (index) => {
    setSelectedMemberIndex(index);
  };

  const handleSelectItem = (selectedItem) => {
    // Implement the logic for handling the selection of an item
    // This could involve updating state, performing actions, etc.
  };

  return (
    <div>
       <SearchInput data={submissions} onSelect={handleSelectItem} />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>الرقم الترتيبي</th>
            <th>التسمية</th>
            <th>القطاع</th>
            <th>الغرض الرئيسي</th>
            <th>الاسم</th>
            <th>CIN</th>
            <th>الصفة</th>
            <th>la part</th>
            <th>capitale</th>
            <th>blockage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {submissions.map((submission, index) => (
    <React.Fragment key={index}>
      <tr onClick={() => handleRowClick(submission)} className={selectedSubmission === submission ? 'selected' : ''}>
        <td>{index + 1}</td>
        <td>{submission.التسمية}</td>
        <td>{submission.القطاع}</td>
        <td>{submission.الغرض_الرئيسي}</td>
{submission.الاعضاء && submission.الاعضاء.length > 0 ? (
  <>
    <td>
      {submission.الاعضاء.map((member, memberIndex) => (
        <div key={member.CIN}>{member.CIN}</div>
      ))}
    </td>
    <td>
      {submission.الاعضاء.map((member, memberIndex) => (
        <div key={member.CIN}>{member.الاسم}</div>
      ))}
    </td>
    <td>
      {submission.الاعضاء.map((member, memberIndex) => (
        <div key={member.CIN}>{member.الصفة}</div>
      ))}
    </td>
    <td>
      {submission.الاعضاء.map((member, memberIndex) => (
        <div key={member.CIN}>{member.la_part}</div>
      ))}
    </td>
  </>
) : (
  <td colSpan={4}>No members</td>
)}
        <td>{submission.capitale}</td>
        <td>{submission.blockage}</td>
        <td>
          <Button variant="danger" onClick={() => handleDelete(index)}>
            Delete
          </Button>
          <Button variant="warning" onClick={handleModify}>
            Modify
          </Button>
        </td>
      </tr>
      {selectedSubmission === submission && (
        <tr>
          <td colSpan={11}>
            <div className="selected-submission-details">
              <h4>Selected Submission Details</h4>
              <pre>{JSON.stringify(selectedSubmission, null, 2)}</pre>
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  ))}
</tbody>

      </Table>

      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group controlId={`selectMember`}>
              <Form.Label>Select a Member:</Form.Label>
              <Form.Control
                as="select"
                value={selectedMemberIndex}
                onChange={(e) => handleMemberSelect(e.target.value)}
              >
                <option value={-1}>Select a Member</option>
                {modifiedSubmission.الاعضاء && modifiedSubmission.الاعضاء.length > 0 &&
                  modifiedSubmission.الاعضاء.map((member, index) => (
                    <option key={index} value={index}>{member.الاسم}</option>
                  ))}
              </Form.Control>
            </Form.Group>

            
            {selectedMemberIndex !== -1 && (
              <MemberForm
                member={modifiedSubmission.الاعضاء[selectedMemberIndex]}
                onMemberChange={(updatedMember) => {
                 
                  if (!selectedSubmission || selectedMemberIndex < 0 || selectedMemberIndex >= selectedSubmission.الاعضاء.length) {
                    return;
                  }

                 
                  const modifiedWithUpdatedMember = {
                    ...selectedSubmission,
                    الاعضاء: [
                      ...selectedSubmission.الاعضاء.slice(0, selectedMemberIndex),
                      updatedMember,
                      ...selectedSubmission.الاعضاء.slice(selectedMemberIndex + 1),
                    ],
                  };

                  setModifiedSubmission(modifiedWithUpdatedMember);
                }}
              />
            )}

            
            {Object.keys(modifiedSubmission).filter(fieldName => fieldName !== 'الاعضاء')
            .map((fieldName) => (
              <Form.Group controlId={`form${fieldName}`} key={fieldName}>
                <Form.Label>{fieldName}:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Enter modified ${fieldName}`}
                  value={modifiedSubmission[fieldName]}
                  onChange={(e) => handleFieldChange(fieldName, e.target.value)}
                />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} style={{width:'24px'}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveModification}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SubmissionTable;
