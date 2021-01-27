import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './../App.css' ;
import { Table,Form } from 'react-bootstrap';
import {Grid} from "@material-ui/core";



 const PatientActivity = () => {
  return (
    <Form>
       <Grid container spacing={3}>

        <Grid item xs={12} >

      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label >Search</Form.Label>
      <Form.Control type="text" />
    </Form.Group>
    </Grid>
    </Grid>
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
     

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
      

      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
   
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
    

      </tr>
      <tr>
        <td>4</td>
        <td >Larry the Bird</td>
        <td>@twitter</td>
       

      </tr>
    
    </tbody>
  </Table>
  </Form>

  );
};


export default PatientActivity;