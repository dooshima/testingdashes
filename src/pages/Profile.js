import  React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button,Table } from 'react-bootstrap';
import {Grid} from "@material-ui/core";
import { Card } from 'react-bootstrap';
import axios from "axios";


const session ={
  token: localStorage.getItem('token'),
}
// console.warn(session);


export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      datas:"",
    }
  }


componentDidMount()
{
  //  console.log(this.props.id.id.id);
  axios.get(`https://helloworld.com.ng/medflit-api/api/admin/users/find?id=${this.props.id.id.id}`,{
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
          this.setState(
            {   
              datas:response.data.data,
            })
          // console.info(response.data.data);
          console.info(this.state.datas);


        });

}

  render() {
  return (
<div>
{
  this.state.datas
  ?
<Form>
<Grid container spacing={1}>
    <Grid item xs={6} >
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className = "bankstyle">Full Name</Form.Label>
          <Form.Control 
          type="text" 
          placeholder=""
          value ={this.state.datas.profile.firstname} />
          </Form.Group>
          </Grid>


    <Grid item xs={6} >
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label className = "bankstyle">Email</Form.Label>
      <Form.Control type="email" placeholder=""
      value ={this.state.datas.email}
      />
      </Form.Group>
      </Grid>  

      <Grid item xs={6} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label  className = "bankstyle">Username</Form.Label>
          <Form.Control 
          type="text"
           placeholder="" 
           value ={this.state.datas.username}
           />
        </Form.Group>
      </Grid>

      <Grid item xs={6} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label  className = "bankstyle">Phone Number</Form.Label>
          <Form.Control 
          type="text"
           placeholder="" 
           value ={this.state.datas.phone}
           />
        </Form.Group>
        </Grid>

        <Grid item xs={6} >
            <Form.Group controlId="BankName:">
              <Form.Label className = "bankstyle">Gender</Form.Label>
              <Form.Control 
                type="text"
                placeholder="" 
                value ={this.state.datas.profile.gender}
           />
        </Form.Group>
        </Grid>
      
        <Grid item xs={6} >
            <Form.Group controlId="BankName:">
              <Form.Label className = "bankstyle">Age</Form.Label>
              <Form.Control 
                type="text"
                placeholder="" 
                value ={this.state.datas.profile.gender} />
        </Form.Group>
        </Grid>
        <Grid item xs={6} >
            <Form.Group controlId="BankName:">
              <Form.Label className = "bankstyle">Weight</Form.Label>
              <Form.Control 
                type="text"
                placeholder="" 
                value ={this.state.datas.profile.gender} />
        </Form.Group>
        </Grid>
        

        <Grid item xs={6} >
            <Form.Group controlId="BankName:">
              <Form.Label className = "bankstyle">Blood type</Form.Label>
              <Form.Control 
                type="text"
                placeholder="" 
                value ={this.state.datas.profile.gender} />
        </Form.Group>
        </Grid>

        <Grid item xs={6} >
            <Form.Group controlId="BankName:">
              <Form.Label className = "bankstyle">Height</Form.Label>
              <Form.Control 
                type="text"
                placeholder="" 
                value ={this.state.datas.profile.gender} />
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
          <Form.Control type="text"
           placeholder="" 
           value ={this.state.datas.biodata.city}
          />
        </Form.Group>
        </Grid>

        <Grid item xs={6} >

      <Button variant="success">          
                Update profile
        
      </Button>
</Grid>


</Grid>
</Form>
:<p>loading</p> 
}
</div>
);
}
}
