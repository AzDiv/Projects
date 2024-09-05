//Printables.js
//import React, { useState } from 'react';
//
// Import HTML documents
//import DocI from './Doc_I.html';
//import DocII from './Doc_II.html';
//import DocIII from './Doc_III.html';
//import DocIV from './Doc_IV.html';
//
//const Printables = ({ selectedDocument, onClosePreview }) => {
//  // Map document names to their corresponding HTML content
//  const documents = {
//    'Doc_I.html': DocI,
//    'Doc_II.html': DocII,
//    'Doc_III.html': DocIII,
//    'Doc_IV.html': DocIV,
//  };
//
//  const htmlContent = selectedDocument ? documents[selectedDocument.url] : '';
//
//  return (
//    <div>
//      <h2>Printables</h2>
//      <button onClick={onClosePreview}>Close Preview</button>
//      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//    </div>
//  );
//};
//
//export default Printables;
//