import React from 'react';
import './services.css';

const Services = () => {
  const documents = [
    {
      name: 'Emblems',
      path: '/gallery/Emblems_2009.pdf',
      description: 'Browse our collection of emblems'
    },
    {
      name: 'Work Order Form',
      path: '/gallery/work_order2019.pdf',
      description: 'Download our work order form'
    }
  ];

  return (
    <div className="services">
      <h1>Services</h1>
      <div className="documents-section">
        {documents.map((doc, index) => (
          <div key={index} className="document-card">
            <h3>{doc.name}</h3>
            <p>{doc.description}</p>
            <a 
              href={doc.path}
              download
              className="download-button"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;