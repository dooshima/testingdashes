import React, { useState } from "react";
import './../App.css' ;
import {makeStyles } from '@material-ui/core';
import {Grid,Paper} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import TapView from './TapView';
import PatientModal from './PatientModal';
import { Modal,Dropdown } from 'react-bootstrap';




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
  another:{
    marginTop:'100px',
    color:'black',
  },
 avatars:{
   marginTop:'90px',
   width:'80%',
  height:'90%',
  borderTop: '#007bff solid 3px',
 },
 stylepaper:{
  marginTop:'90px',
  width:'80%',
 height:'90%',
},

 large: {
  width: theme.spacing(9),
  height: theme.spacing(9),
  marginLeft:'80px',
  marginTop:'30px',

},
gridone:{
  maxWidth: 500,
  height: 500,

},
typo:{
  marginTop:'110px',
  marginLeft:'90px',

},
h2:{
  display:'flex',
  justifyContent:'center'
},
buttons:{
  marginLeft:'60px',
  padding:'5px',
  fontSize:'15px',
  color:'white'

},
styleAbout:{
  height:'40px',
  borderBottom:'grey  solid 1px',
  backgroundColor:'#007bff',
  textAlign:'center',
  color:'white'
},
stylesub:{
  height:'40px',
  borderBottom:'grey  solid 1px',
  textAlign:'center',
},
increaseHeight:{
  height:'420px',
}
}));

function Viewdirect () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  
  return (
    <div className={classes.root}>
     
    <Grid container spacing={2}>
          <Grid item xs={4} className={classes.gridone}>
          <Grid item xs={12} className={classes.increaseHeight}>

             <Paper className={classes.paper, classes.avatars} spacing= {6}> 
             <Avatar src="/broken-image.jpg" className={classes.large} />
            
             <Typography variant="h4" gutterBottom className={classes.h2}>
                John Doe
                </Typography>
               <Typography variant="p" gutterBottom className={classes.typo}>
                Patient
                </Typography>
                

                <Typography variant="h6" gutterBottom className={classes.h2}>
                Current Balance
                </Typography>
                <Typography variant="p" gutterBottom className={classes.typo}>
                #45000
                </Typography>
              <div  className = "changeButton">
              <Button variant="primary"  href="/Patientlog" className={classes.margin, classes.buttons}>       
                    Change Password
                </Button>
              </div>

              <Grid item xs={12} className={classes.increaseHeight}>
              {/* <Grid item xs={12}  className = "changeButton"> */}
              <Dropdown className={classes.margin, classes.buttons}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Subscribe Tab
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">3 Months</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">6 Months</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">12 Months</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
              {/* </div>
               <div className = "changeButton"> */}

               <Button variant="primary"  onClick={handleShow} className={classes.margin, classes.buttons}>       
                 Get Doctor
                </Button>
           <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
         </Modal>
              </Grid>
            </Paper>

           </Grid>
   <Grid item xs={12}>
        <Paper className={classes.paper, classes.avatars} spacing= {1}> 

          <Typography variant="h6" gutterBottom className={classes.paper,classes.stylesub}>
          Subscription
          </Typography>
          <Typography variant="h6" gutterBottom >
            Location
          </Typography>

          <Typography variant="p" gutterBottom >
            Babajide Ogundipe, PT, Oxon Hill Road, Oxon Hill, MD, USA
          </Typography>


        </Paper>

        </Grid>


        <Grid item xs={12}>

        <Paper className={classes.paper, classes.stylepaper} spacing= {6}> 


          <Typography variant="h6" gutterBottom className={classes.styleAbout}>
          About Me
          </Typography>
          <Typography variant="h6" gutterBottom >
            Location
          </Typography>

          <Typography variant="p" gutterBottom >
            Babajide Ogundipe, PT, Oxon Hill Road, Oxon Hill, MD, USA
          </Typography>


        </Paper>

        </Grid>

        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paper, classes.another} spacing= {3}>
          <TapView/>
            
          </Paper>
        </Grid>
      </Grid>
 
      </div>
   
    
  );
}

export default Viewdirect;