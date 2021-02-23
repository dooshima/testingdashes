import React from 'react';
import './../App.css' ;
import { Link } from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';
import Sidebar from  '../components/Sidebar';
import axios from "axios"
import Dropdown from 'react-bootstrap/Dropdown';
 

export default class Providerlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     datas:[]
    }
  }

componentDidMount()
{
  axios.get('http://helloworld.com.ng/medflit-api/api/providers/find')
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
                  <th>Prof. Class	</th>
                  <th>Full Name</th>
                  <th>Medicine Org.</th>
                  <th>Org Tel.</th>

                  <th>Licence Id</th>

                  <th>Resume</th>
                  <th>University Certifcate</th>
                  <th>Medicine Licence</th>
                  <th>Provider Status</th>
                  <th>Action</th>

                </tr>
              </thead>

              <tbody>
                {
                this.state.datas.map(data =>{
                  return(

                 <tr>
                      <td key={data.id}>{data.id}</td>
                      <td key={data.name}>{data.provider.profession.name}</td>
                      <td key= {data.firstname && data.lastname}>
                        {data.profile.firstname}{data.profile.lastname}</td>
                     <td key={data.name}>{data.provider.hospital_name}</td>
                     <td key={data.phone}>{data.username}</td>
                     <td key={data.phone}>{data.username}</td>
                     <td key={data.phone}>{data.username}</td>
                     <td key={data.phone}>{data.username}</td>
                     <td key={data.phone}>{data.username}</td>
                     <td key={data.phone}>{data.username}</td>

                     <td key={data.id}>
                      <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Action
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="/Viewprovider">View</Dropdown.Item>
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
          
      </div>
    )
  }
}