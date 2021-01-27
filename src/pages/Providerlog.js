import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './../App.css' ;
import { Link } from 'react-router-dom';
import  Viewprovider  from './Viewprovider';
import {Button, Table} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';



 const Providerlog = () => {
  return (
    <div  className = 'displayPatientLog'>
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
      <tr>
        <td>1</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

        <td>  
          <Button variant="link">Link</Button>
        </td>
        <td> 
           <Button variant="link">Link</Button>
	      </td>
        <td>Not subscribed</td>

        <td>Active</td>
        <td>
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
      <tr>
        <td>2</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

        <td>  
          <Button variant="link">Link</Button>
        </td>
        <td> 
           <Button variant="link">Link</Button>
	      </td>
        <td>Not subscribed</td>

        <td>Active</td>
        <td>
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
     
      <tr>
        <td>3</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

        <td>  
          <Button variant="link">Link</Button>
        </td>
        <td> 
           <Button variant="link">Link</Button>
	      </td>
        <td>Not subscribed</td>

        <td>Active</td>
        <td>
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
     
      <tr>
        <td>4</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

        <td>  
          <Button variant="link">Link</Button>
        </td>
        <td> 
           <Button variant="link">Link</Button>
	      </td>
        <td>Not subscribed</td>

        <td>Active</td>
        <td>
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
     
      <tr>
        <td>5</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

        <td>  
          <Button variant="link">Link</Button>
        </td>
        <td> 
           <Button variant="link">Link</Button>
	      </td>
        <td>Not subscribed</td>

        <td>Active</td>
        <td>
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
     
      <tr>
        <td>6</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

        <td>  
          <Button variant="link">Link</Button>
        </td>
        <td> 
           <Button variant="link">Link</Button>
	      </td>
        <td>Not subscribed</td>

        <td>Active</td>
        <td>
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
     
      <tr>
        <td>7</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

        <td>  
          <Button variant="link">Link</Button>
        </td>
        <td> 
           <Button variant="link">Link</Button>
	      </td>
        <td>Not subscribed</td>

        <td>Active</td>
        <td>
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
     
      <tr>
        <td>8</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>

        <td>  
          <Button variant="link">Link</Button>
        </td>
        <td> 
           <Button variant="link">Link</Button>
	      </td>
        <td>Not subscribed</td>

        <td>Active</td>
        <td>
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

    </tbody>
  </Table>
  </div>
  );
};




export default Providerlog;