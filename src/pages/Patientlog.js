import  React, {Component} from 'react';
import './../App.css' ;
import {Button, Table} from 'react-bootstrap';
import Sidebar from  '../components/Sidebar';
import axios from "axios";
import  Viewdirect  from './Viewdirect';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from "react-js-pagination";



const api = axios.create({
  baseURL:`http://helloworld.com.ng/medflit-api/api/patients/find`
});

const session ={
  token: localStorage.getItem('token'),
}
console.warn(session);



export default class Patientlog extends Component {

   constructor(props) {
    super(props);
    this.state = {
     datas:[],
     activePage:1,
     itemsCountPerPage:1,
     totalItemsCount:1
    }
    this.handlePageChange = this.handlePageChange.bind(this);

  }

componentDidMount()
{
  axios.get('http://helloworld.com.ng/medflit-api/api/patients/find',{
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
          this.setState({
            datas:response.data.data,
            itemsCountPerPage:response.data.per_page,
            // totalItemsCount:response.data
          activePage:response.data.current_page,
          
          })
          console.info(response.data);
        });
}

handlePageChange(pageNumber) {
  console.log(`active page is ${pageNumber}`);
  axios.get('http://helloworld.com.ng/medflit-api/api/patients/find?page='+pageNumber,{
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
          this.setState({
            datas:response.data.data,
            itemsCountPerPage:response.data.per_page,
            // totalItemsCount:response.data
          activePage:response.data.current_page,
          });
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
                this.state.datas.map((data,index )=>{                 
                  return(

                 <tr>
                      <td key={index}>{data.id}</td>
                      <td key= {index}>
                        {data.profile.firstname}</td>

                        <td key= {index}>
                          {data.profile.lastname}</td>

                          <td key={index}>{data.profile.id}</td>

                          <td key={index}>{data.subscription.expired}</td>
                          <td key={index}>{data.subscription.expires_at}</td>
                          <td key={index}>{data.subscription.starts_at}</td>

                          <td key={index}>{data.subscription.active}</td>
                          <td key={index}>
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

          

                  </tr>
                  )
                  })
                  }
                </tbody>
            </Table>
            <div className="d-flex justify-content-end">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.itemsCountPerPage}
              totalItemsCount={450}
              pageRangeDisplayed={3}
              onChange={this.handlePageChange.bind(this)}
              itemClass	= 'page-item'
              linkClass = 'page-link'
            
        />
      </div>
      </div>
    )
  }
}