import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card } from 'react-bootstrap';



const Providerdetails = () => {

  return (
      <Card className = 'cards'>

    <div className = 'details'>
    <h4>Bank Details</h4>


     <Form>
     <Grid container spacing={3}>
       
      <Grid item xs={6} >
      <Form.Group controlId="BankName:">
        <Form.Label className = "bankstyle">Bank Name</Form.Label>
        <Form.Control as="select">
          <option>Access Bank</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
  </Form.Group>
  </Grid>
  <Grid item xs={6} >
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label  className = "bankstyle">Account Number</Form.Label>
    <Form.Control type="text" placeholder="000034567" />
  </Form.Group>
 </Grid>
 <Button as="input" type="submit" value="Add Value" />

 </Grid>
</Form>
</div>

</Card>
  );
};

export default Providerdetails;
