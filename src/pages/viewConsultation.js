import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card } from 'react-bootstrap';
import  directConsultation from './directConsultation';
import Sidebar from  '../components/Sidebar';


const viewConsultation = () => {
  return (
    <div className='displayPatientLog'>
                  <Sidebar />

      <Card className = 'cardDirect'>
      <h4 className="changeh4">View Direct Consultation</h4>

<div className = 'details'>
<p className="styleborder">Diagnosis</p>


 <Form>
 <Grid container spacing={3}>
   
  <Grid item xs={6} >
  <Form.Group controlId="BankName:">
    <Form.Label className = "addmargin">Bank Name</Form.Label>
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
<Form.Label  className = "addmargin">Account Number</Form.Label>
<Form.Control type="text" placeholder="000034567" />
</Form.Group>
</Grid>

<Grid item xs={12} >
<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className = "bankstyle">Observations </Form.Label>
    <Form.Control as="textarea" rows={2} />
  </Form.Group>
  </Grid>

  <Grid item xs={12} >
<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Doctor's Advice </Form.Label>
    <Form.Control as="textarea" rows={2} />
  </Form.Group>
  </Grid>

  <h4>What kind of issue is patient </h4>
<Grid item xs={12}>

  {[ 'radio'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-3">
      <Form.Check
        custom
        inline
        label="1"
        type={type}
        id={`custom-inline-${type}-1`}
      />
      <Form.Check
        custom
        inline
        label="2"
        type={type}
        id={`custom-inline-${type}-2`}
      />
     
    </div>
  ))}
  </Grid>
  <Button variant="primary" id="register" type="Button" href="/directConsultation">
    Next
  </Button>

</Grid>
</Form>
</div>

</Card>
    </div>
  );
};

export default viewConsultation;
