import React from 'react';
import { Button } from 'react-bootstrap';
import Sidebar from  '../components/Sidebar';

const PatientHealth = () => {
  return (
    <div className='health'>
                  <Sidebar />

        <Button variant="primary">          
          Download patient Record
      </Button>

  </div>   
  );
};

export default PatientHealth;