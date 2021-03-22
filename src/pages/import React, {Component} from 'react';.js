import  React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Table } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card } from 'react-bootstrap';
import axios from "axios";



const api = axios.create({
  baseURL:`http://helloworld.com.ng/medflit-api/api/patients/find`
});

const session ={
  token: localStorage.getItem('token'),
}
console.warn(session);


export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
     datas:[],
    }
  }


componentDidMount()
{
  api.get('' ,{
        headers: {
         'Authorization': "Bearer "+ localStorage.getItem('token'),      
         'Accept': 'application/json',
         'crendentials':'same-origin',
         'Content-type': 'application/json',
         'Access-Control-Allow-Origin' : "*", 
         "Access-Control-Allow-Credentials" : true 
          },

       })
        .then(response => {
          this.setState({datas:response.data.data})
          console.info(response.data);

        });
}

// onView = id =>{
//   //console.log('work work', id);
//   this.props.onView(this.props.data.id);
// }
  render() {
  return (
<div>
      <Card >

      <div style={{marginLeft:'20px'}}>
      <h4>Person Information</h4>
      {
      this.state.datas.map((data,i) =>{
        console.log(Array.isArray(this.state.datas));

        return(

      <Form>

      <Grid container spacing={1}>
        
      <Grid item xs={6} >
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label className = "bankstyle">Full Name</Form.Label>
      <Form.Control 
      type="text" 
      placeholder=""
      key= {data.id}
      value ={data.firstname} />
      </Form.Group>
      </Grid>


      <Grid item xs={6} >
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label className = "bankstyle">Email</Form.Label>
      <Form.Control type="email" placeholder=""
      key= {data.id}
      value ={data.email}
      />
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
      )
      })
      }
      </div>

      </Card>
</div>
  );
}
}
