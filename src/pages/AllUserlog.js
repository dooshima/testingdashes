import React from 'react'
import {makeStyles } from '@material-ui/core';
import './../App.css' ;
import {Button, Table} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import {Grid,Paper} from "@material-ui/core";

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


 function AllUserlog() {
    const classes = useStyles();

    return (
    <div className='displayPatientLog'>
        <div>
            <h2 style={{margin:'10px'}}>All Users</h2>
        </div>
       <Paper className={classes.paper, classes.userstyle} spacing= {10}>          

        <Grid container spacing={3}>
        <Grid item xs={6} >
            <p style={{margin:'15px',fontSize:'15px' }}>All Users</p>
        </Grid>
        <Grid item xs={6} >
            <Button variant ="primary" style={{justifyContent:'right'}}>Add User</Button>
        </Grid>
        </Grid>
        <Table striped bordered hover>

        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Unique Id</th>
            <th>Status</th>
            <th>Roles</th>
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
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>
          <tr>
            <td>2</td>
            <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>
         
          <tr>
            <td>3</td>
            <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>

          <tr>
            <td>4</td>
           <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>
         
          <tr>
            <td>5</td>
            <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
          </tr>

          <tr>
            <td>6</td>
           <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>
         
          <tr>
            <td>7</td>
            <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>

          <tr>
            <td>8</td>
            <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>

          
          <tr>
            <td>9</td>
            <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>
          
          <tr>
            <td>10</td>
            <td>Adeyinka</td>
            <td>AdenIran</td>
            <td>MDFLT2</td>
            <td>Not subscribed</td>
            <td> 
            <p style={{background:'green', color:'white',width:'60px',borderRadius:'3px' }}>
                Active
            </p></td>
            <td><p style={{background:'blue', color:'white',width:'90px',borderRadius:'3px' }}>
                Administrator
            </p></td>
            <td>Not subscribed</td>
    
            <td>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Action
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="/viewConsultation"  style={{color:'blue'}}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" style={{color:'blue'}}>
                     De-Activate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3"  style={{color:'blue'}}>
                    Delete User Action
                </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </td>
    
          </tr>
        </tbody>
      </Table>
      </Paper>
      </div>
    )
}

export default  AllUserlog;
