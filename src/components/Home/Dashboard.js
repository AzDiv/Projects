// Dashboard.js
import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import '../Style/Dashboard.css';
import Identification from './indentification';
import SubmissionTable from './SubmissionTable';
import Logo1 from '../assets/logo_center.png'
import Printables from './Printables';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [submissions, setSubmissions] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSubmission = (submissionData) => {
    
    setSubmissions([...submissions, submissionData]);
  };

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
  };
  
  return (
    <>
      <Container fluid className="dashboard-container">
        {/* <Row> */}
          {/* Removed Navbar */}
          {/* Removed Sidebar */}
          <div className="sticky-bg"></div>
          {/* <Col sm={9} className="ml-auto p-4"> */}
            <Identification onSubmission={handleSubmission} />
            <SubmissionTable submissions={submissions} setSubmissions={setSubmissions}/>
            {window.location.pathname === '/link' && <Printables onSelectDocument={handleDocumentClick} />}
            {selectedDocument && (
              <Printables selectedDocument={selectedDocument} onClosePreview={() => setSelectedDocument(null)} />
            )}
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    </>
  );
};

export default Dashboard;