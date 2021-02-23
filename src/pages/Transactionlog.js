import React from 'react'
import {Button, Table} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Sidebar from  '../components/Sidebar';


 function Transactionlog() {
    return (
        <div className='displayPatientLog'>
       <Sidebar />

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Unique Id</th>
        <th>UserType</th>
        <th>Reference No</th>
        <th>Type</th>
        <th>Service</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Date</th>
     

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>

      </tr>
      <tr>
        <td>2</td>
        <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>

      </tr>
     
      <tr>
        <td>3</td>
        <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>


      </tr>
     
      <tr>
      <td>4</td>
      <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>



      </tr>
     
      <tr>
      <td>5</td>
      <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>


      </tr>
     
      <tr>
      <td>6</td>
      <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>

      </tr>
     
      <tr>
      <td>7</td>
      <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>


      </tr>
      <tr>
      <td>8</td>
      <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>


      </tr>

      <tr>
      <td>9</td>
      <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>


      </tr>

      <tr>
      <td>10</td>
      <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>


      </tr>

      <tr>
      <td>11</td>
      <td>Adeyinka AdenIran</td>
        <td>MDFLT2</td>
        <td>
            <p style={{background:'red', color:'white',width:'60px',borderRadius:'3px' }}>
                Provider
            </p>
        </td>
        <td>Not Subscribed</td>
        <td>
            <p style={{background:'green', color:'white',width:'50px',borderRadius:'3px' }}>
                online
                </p>
        </td>
        <td>Service Payment
        <span style={{background:'green', color:'white',fontSize:'15px',width:'10px',borderRadius:'3px' }}>
        Credit
        </span>
        </td>
        <td>$3,000.00</td>
        <td>
           <p  style={{background:'green', color:'white',fontSize:'15px',width:'80px',borderRadius:'3px' }}>
               Completed
            </p> 
        </td>
        <td>Mon, 01 Oct 2018</td>


      </tr>

    </tbody>
  </Table>
        </div>
    )
}
export default  Transactionlog;
