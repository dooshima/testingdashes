import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Table } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card } from 'react-bootstrap';


const Provideroverview = () => {
  return (
  <div>

<Card className = 'cards' >

<div  className ='carding'>
<h4>Person Information</h4>

 <Form>
 <Grid container spacing={3}>
   
 <Grid item xs={6} >
      <Form.Group controlId="BankName:">
        <Form.Label className = "bankstyle">Title</Form.Label>
        <Form.Control as="select">
          <option>Ms</option>
          <option>Mr</option>
          <option>Mrs</option>
          
        </Form.Control>
  </Form.Group>
  </Grid>

 <Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">First Name</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>

<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">Last Name: </Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>


{/* second */}



<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">Email Address</Form.Label>
<Form.Control type="email" placeholder="" />
</Form.Group>
</Grid>

{/* THIRD */}
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
 


{/* fifth */}


  <Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">City</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>

<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className = "bankstyle">Address: </Form.Label>
    <Form.Control as="textarea" rows={2} />
  </Form.Group>
  </Grid>




{/* seventh */}



</Grid>
</Form>
</div>


<div  className ='carding, addingborders'>
<h4>Profession Information</h4>

 <Form>
 <Grid container spacing={3}>
 
 <Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">License Id No</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>

<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">License Issue  Date: </Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>


{/* second */}



<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">License Expiry Date</Form.Label>
<Form.Control type="email" placeholder="" />
</Form.Group>
</Grid>

{/* THIRD */}
<Grid item xs={6} >
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label  className = "bankstyle">Phone Number</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
 </Grid>


 <Grid item xs={6} >
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label  className = "bankstyle">Hosiptal name</Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
 </Grid>



{/* fifth */}


  <Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">City</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>


<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">Years of Experience</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>



<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlInput1">
<Form.Label className = "bankstyle">Area of Specification</Form.Label>
<Form.Control type="text" placeholder="" />
</Form.Group>
</Grid>



<Grid item xs={6} >
<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className = "bankstyle">Doctor's Bio: </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Grid>



</Grid>
</Form>
</div>

</Card>

</div>  
  );
};

export default Provideroverview;