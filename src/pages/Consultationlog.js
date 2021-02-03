import React from 'react';
import {Button, Table} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import  viewConsultation  from './viewConsultation';

const Consultationlog = () => {
  return (
    <div className='displayPatientLog'>
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
           <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/viewConsultation">View</Dropdown.Item>
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

       
        <td>Not subscribed</td>

        <td>
           <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/viewConsultation">View</Dropdown.Item>
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

      
        <td>Not subscribed</td>

        <td>
           <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/viewConsultation">View</Dropdown.Item>
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

    
        <td>Not subscribed</td>

        <td>
           <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/viewConsultation">View</Dropdown.Item>
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
        <td>Not subscribed</td>

        <td>
           <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/viewConsultation">View</Dropdown.Item>
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

       
        <td>Not subscribed</td>
        <td>
           <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/viewConsultation">View</Dropdown.Item>
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

       
        <td>Not subscribed</td>
        <td>
           <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/viewConsultation">View</Dropdown.Item>
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

       
        <td>Not subscribed</td>

        <td>
           <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
          Action
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/viewConsultation">View</Dropdown.Item>
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

export default Consultationlog;


