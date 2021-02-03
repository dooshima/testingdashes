import React from 'react';
import { Form,Button } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card,Table } from 'react-bootstrap';
import  nextDirectConsulation from './nextDirectConsulation';
import  viewConsultation from './viewConsultation';


const directConsultation = () => {
  return (
    <div className='displayPatientLog'>

     <Card className = 'cards'>

        <h5>Laboratory Tests</h5>


        <Form>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Test	</th>
        <th>Instruction</th>

     

      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      
      </tr>
    
    </tbody>
  </Table>
  <div>

    <Button variant="primary" id="register" type="Button" href="/viewConsultation">
        Previous
    </Button>

    <Button className="addspacing" variant="primary" id="register" type="Button" href="/nextDirectConsulation">
        Next
    </Button>

    </div>

        </Form>

</Card>   
</div> 
  );
};

export default directConsultation;
