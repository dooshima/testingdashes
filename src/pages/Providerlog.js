import React from 'react';
import './../App.css' ;
import { Link } from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';
import Sidebar from  '../components/Sidebar';
import axios from "axios"
import Dropdown from 'react-bootstrap/Dropdown';
import Pagination from "react-js-pagination";


export default class Providerlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     datas:[],
     activePage:1,
     itemsCountPerPage:1,
     totalItemsCount:1,
     loading:true,
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }

componentDidMount()
{
  axios.get('https://helloworld.com.ng/medflit-api/api/providers')
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

handlePageChange(pageNumber) {
  console.log(`active page is ${pageNumber}`);
  
  //this.setState({activePage: pageNumber});
  axios.get('https://helloworld.com.ng/medflit-api/api/providers/find?page='+pageNumber)
        .then(response => {
          console.info(response.data);

          this.setState({
            datas:response.data.data,
            itemsCountPerPage:response.data.per_page,
            // totalItemsCount:response.data
          activePage:response.data.current_page,
          });
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
                 

                this.state.datas.map((data, index) =>{
                 console.log(data);
              
                  if(data.provider==null){
                    return;
                  }
                  return(
                  
                 <tr>
                      <td key={index}>{data.id}</td>
                      <td key={index}>{data.provider.profession_label==null?"":data.provider.profession_label}</td>
                      <td key={index}>
                        {data.profile.firstname}{data.profile.lastname}</td>
                     <td key={index}>{data.provider.hospital_name}</td>
                     <td key={index}>{data.username}</td>
                     <td key={index}>{data.username}</td>
                     <td key={index}>{data.username}</td>
                     <td key={index}>{data.username}</td>
                     <td key={index}>{data.username}</td>
                     <td key={index}>{data.username}</td>

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