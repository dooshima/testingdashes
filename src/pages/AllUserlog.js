import React from 'react'
import {makeStyles } from '@material-ui/core';
import './../App.css' ;
import {Button, Table} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import {Grid,Paper} from "@material-ui/core";
import Sidebar from  '../components/Sidebar';


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
  //const classes = useStyles();
  constructor() {
    super();
    this.state = {
      data: false
    }
  }

  componentDidMount() {
    let url = "http://helloworld.com.ng/medflit-api/api/admin/users";
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      }
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp })
      })
    })
  }

  render() {
    const data = this.state.data;
    console.info(data);

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
        <tbody>
        <tr>

          </tr>
        </tbody>
      </Table>
      {/* </Paper> */}
      </div>
    )
}

}