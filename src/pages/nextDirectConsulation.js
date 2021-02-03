import React from 'react';
import  directConsultation from './directConsultation';
import { Form,Button } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card,Table } from 'react-bootstrap';


const nextDirectConsulation = () => {
    return (
        <div className='displayPatientLog'>
    
         <Card className = 'cards'>
    
            <h5>Prescriptions</h5>
    
    
            <Form>
            <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Medication	</th>
        <th>Dosage</th>
        <th>Frequency</th>
        <th>No of days	</th>
        <th>Route</th>

      </tr>
    </thead>
    <tbody>
    
     
      <tr>
        <td>3</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

  
  
      </tr>

    </tbody>
  </Table>
        <Button variant="primary" id="register" type="Button" href="/directConsultation">
            Previous
        </Button>
    
      
    
    
            </Form>
    
    </Card>   
    </div> 
  );
};

export default nextDirectConsulation;
