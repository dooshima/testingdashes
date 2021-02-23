import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Table } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card } from 'react-bootstrap';
import Sidebar from  '../components/Sidebar';


const Profile = () => {
  return (
    <div >
<Sidebar />
<Card >

<div style={{marginLeft:'250px'}}>
<h4>Person Information</h4>


 <Form>
 <Grid container spacing={3}>
   
 <Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">Full Name</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>


<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">Email</Form.Label>
<Form.Control type="email" placeholder="" />
</Form.Group>
</Grid>

<Grid item xs={6} >
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label  className = "bankstyle">Username</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
 </Grid>

 <Grid item xs={6} >
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label  className = "bankstyle">Phone Number</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  </Grid>



<Grid item xs={6} >
      <Form.Group controlId="BankName:">
        <Form.Label className = "bankstyle">Gender</Form.Label>
        <Form.Control as="select">
          <option>Male</option>
          <option>Female</option>
          
        </Form.Control>
  </Form.Group>
  </Grid>
 

 <Grid item xs={6} >
      <Form.Group controlId="BankName:">
        <Form.Label className = "bankstyle">Age</Form.Label>
        <Form.Control as="select">
          <option>less 25</option>
          <option>25-50</option>
          <option> More 50</option>

        </Form.Control>
  </Form.Group>
  </Grid>
  <Grid item xs={6} >
      <Form.Group controlId="BankName:">
        <Form.Label className = "bankstyle">Weight</Form.Label>
        <Form.Control as="select">
          <option>Angola</option>
          <option>Australia</option>
          
        </Form.Control>
  </Form.Group>
  </Grid>
  

  <Grid item xs={6} >
      <Form.Group controlId="BankName:">
        <Form.Label className = "bankstyle">Blood type</Form.Label>
        <Form.Control as="select">
          <option>Angola</option>
          <option>Australia</option>
          
        </Form.Control>
  </Form.Group>
  </Grid>

  <Grid item xs={6} >
      <Form.Group controlId="BankName:">
        <Form.Label className = "bankstyle">Height</Form.Label>
        <Form.Control as="select">
          <option>Angola</option>
          <option>Australia</option>
          
        </Form.Control>
  </Form.Group>
  </Grid>

 

<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className = "bankstyle">Address: </Form.Label>
    <Form.Control as="textarea" rows={2} />
  </Form.Group>
  </Grid>


  <Grid item xs={6} >
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label  className = "bankstyle">City</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  </Grid>


</Grid>
<Button variant="success">          
          Update profile
  
</Button>
</Form>
</div>

</Card>
</div>
  );
};

export default Profile;