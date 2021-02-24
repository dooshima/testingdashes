import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card,Table } from 'react-bootstrap';
import Sidebar from  '../components/Sidebar';



const consultationcurrent = () => {
  return (
    <div className='displayPatientLog'>
               <Sidebar />

    <Card className = 'cardCurrent'>
    <h4 className="changeh4">Current Transaction </h4>

<div className = 'details,'>
<Form>
<Grid container spacing={3}>
 
<Grid item xs={6} >
<Card style={{ width: '18rem' }}>  
  <Card.Body>
    <Card.Link href="#"> 
     <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>

  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title.
    </Card.Text>
  </Card.Body>

</Card>
</Grid>

<Grid item xs={6} >
<Card style={{ width: '18rem' }}>  
  <Card.Body>
    <Card.Link href="#"> 
     <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title.
    </Card.Text>
  </Card.Body>

</Card>
</Grid>

<Grid item xs={12} >
<h4 className="changeh4"> Transaction Log </h4>

   <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name of Provider</th>
        <th>Unique ID</th>
        <th>Date</th>
        <th>Action</th>

     

      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>No consultation available at the moment.</td>
        <td></td>
        <td></td>

      </tr>
    
    </tbody>
  </Table>
</Grid>


</Grid>
</Form>
</div>

</Card>
  </div>
  );
};

export default consultationcurrent;












