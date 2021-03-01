import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import './../App.css' ;
import { Table,Pagination } from 'react-bootstrap';
import Sidebar from  '../components/Sidebar';


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


 const PatientTransaction = () => {
  return (
  
    <div>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>REFERENCE</th>
        <th>USER</th>
        <th>PAYMENT TYPE</th>
        <th>AMOUNT</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#</td>
        <td>TYAEQSCP1THMB7C</td>
        <td>Adeyinka AdenIran	</td>
        <td>medflit card</td>
        <td>500.00</td>

      </tr>
      <tr>
        <td>#</td>
        <td>TYAEQSCP1THMB7C</td>
        <td>Adeyinka AdenIran	</td>
        <td>medflit card</td>
        <td>500.00</td>
      </tr>
      <tr>
        <td>#</td>
        <td>TYAEQSCP1THMB7C</td>
        <td>Adeyinka AdenIran	</td>
        <td>medflit card</td>
        <td>500.00</td>

      </tr>
      <tr>
        <td>#</td>
        <td>TYAEQSCP1THMB7C</td>
        <td>Adeyinka AdenIran	</td>
        <td>medflit card</td>
        <td>500.00</td>

      </tr>
      <tr>
        <td>#</td>
        <td>TYAEQSCP1THMB7C</td>
        <td>Adeyinka AdenIran	</td>
        <td>medflit card</td>
        <td>500.00</td>

      </tr>
    </tbody>

    <div>
    <Pagination>{items}</Pagination>
    <br />
  </div>
  </Table>
</div>
  );
};


export default PatientTransaction;