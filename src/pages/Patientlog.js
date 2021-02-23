import  React, {Component} from 'react';
import './../App.css' ;
import {Button, Table} from 'react-bootstrap';
import Sidebar from  '../components/Sidebar';
import axios from "axios";
import  Viewdirect  from './Viewdirect';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';



const api = axios.create({
  baseURL:`http://helloworld.com.ng/medflit-api/api/patients/find`
});

const session ={
  token: localStorage.getItem('token'),
}
console.warn(session);


// axios.interceptors.request.use(
//   config=>{
//     config.headers.authorization = `Bearer ${session}`;
//     return config;
//   },
//   error =>{
//     return Promise.reject(error);
//   }
// )


export default class Patientlog extends Component {

   constructor(props) {
    super(props);
    this.state = {
     datas:[]
    }
  }

componentDidMount()
{
  api.get('',{
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


  render() {
  
    return (
      <div  className = 'displayPatientLog'>
        <Sidebar />


        <Table striped bordered hover>
              <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Unique Id</th>
                <th>Subscription Status</th>

                <th>Subscription Expiry</th>

                <th>Date</th>
                <th>Status</th>
                <th>Action</th>

              </tr>
              </thead>

              <tbody>
              {
                this.state.datas.map(data =>{
                  return(

                 <tr>
                      <td key={data.id}>{data.id}</td>
                      <td key= {data.firstname}>
                        {data.profile.firstname}</td>

                        <td key= {data.lastname}>
                          {data.profile.lastname}</td>

                          <td key={data.id}>{data.profile.id}</td>

                          <td key={data.id}>{data.subscription.expired}</td>
                          <td key={data.id}>{data.subscription.expires_at}</td>
                          <td key={data.id}>{data.subscription.starts_at}</td>

                          <td key={data.id}>{data.subscription.active}</td>
                          <td key={data.id}>
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Action
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="/Viewdirect">View</Dropdown.Item>
                              <Dropdown.Item href="#/action-2">Block</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></td>

                      {/* <td key={data.name}>{data.provider.profession.name}</td>
                    
                     <td key={data.name}>{data.provider.hospital_name}</td>
                     <td key={data.phone}>{data.phone}</td> */}


                  </tr>
                  )
                  })
                  }
                </tbody>
            </Table>
      </div>
    )
  }
}