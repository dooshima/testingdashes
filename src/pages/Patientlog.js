import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './../App.css' ;
import  Viewdirect  from './Viewdirect';
import { Link } from 'react-router-dom';
import {Button, Table} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';



export const Patientlog = () => {
  return (
    <div  className = 'displayPatientLog'>
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
      <tr>
        <td>1</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
      <tr>
        <td>2</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>3</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>4</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>5</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>6</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>7</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>8</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>9</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>10</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     
      <tr>
        <td>11</td>
        <td>Adeyinka</td>
        <td>AdenIran</td>
        <td>MDFLT2</td>
        <td>Not Subscribed</td>
        <td>Not subscribed</td>
        <td>Tue, 13 Mar 2018	</td>
        <td>Active</td>
        <td>
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
     


    </tbody>
  </Table>
  </div>
  );
};


