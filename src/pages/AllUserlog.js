import React from 'react'
import {makeStyles } from '@material-ui/core';
import './../App.css' ;
import {Button, Table} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Sidebar from  '../components/Sidebar';
import axios from "axios";
import  Viewdirect  from './Viewdirect';



const useStyles = makeStyles((theme) =>({
    root: {
      flexGrow: 1,
      marginLeft: '270px',
      marginRight:'15px',
  
    },
    paper: {
      // padding: theme.spacing(8),
  
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    userstyle:{
        margin:'20px'
    },
}));


export default class AllUserlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     datas:[]
    }
  }

componentDidMount()
{
  axios.get("http://helloworld.com.ng/medflit-api/api/admin/users",{
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
          this.setState({datas:response.data.data.data})
          console.info(response.data);
        });
}

  render() {
    return (
    <div className='displayPatientLog'>
       <Sidebar />

        <div>
            <h2 style={{margin:'10px'}}>All Users</h2>
        </div>
       {/* <Paper className={classes.paper, classes.userstyle} spacing= {10}>          

        <Grid container spacing={3}>
        <Grid item xs={6} >
            <p style={{margin:'15px',fontSize:'15px' }}>All Users</p>
        </Grid>
        <Grid item xs={6} >
            <Button variant ="primary" style={{justifyContent:'right'}}>Add User</Button>
        </Grid>
        </Grid> */}
          <Table striped bordered hover>
              <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>City</th>

                <th>Medical Id</th>


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

                          <td key={data.id}>{data.email}</td>
                          <td key={data.id}>{data.profile.city}</td>
                          <td key={data.id}>{data.profile.medical_id}</td>

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