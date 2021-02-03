import React from 'react';
import { Form,Button } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card,Table,Dropdown } from 'react-bootstrap';


const consultationpage = () => {
  return (
    <div className='displayPatientLog'>
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
        <th>Patient	</th>
        <th>Unique Id</th>
        <th>Doctor</th>
        <th>Diagnosis</th>

        <th>Consultation</th>

        <th>Date</th>
        <th>Action</th>
     

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

      
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

      </tr>
      <tr>
        <td>2</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

       
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>
      </tr>
     
      <tr>
        <td>3</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

      
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>
      </tr>
     
      <tr>
        <td>4</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

    
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

      </tr>
     
      <tr>
        <td>5</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>   
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

      </tr>
    
      <tr>
        <td>6</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

    
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

      </tr>
     
      <tr>
        <td>7</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>   
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

      </tr>
      <tr>
        <td>8</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

    
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

      </tr>
     
      <tr>
        <td>9</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>   
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

      </tr>
      <tr>
        <td>4</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

    
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

      </tr>
     
      <tr>
        <td>10</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>   
        <td>Not subscribed</td>

        <td>
        <Button variant="danger"  className= "addspacing">          
          View Stat
        </Button>
        <Button variant="danger" className= "addspacing">          
          Make Payemnt
        </Button>
      </td>

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

export default consultationpage;
