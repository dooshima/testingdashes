import React, { useState } from "react";
import './../App.css' ;
import {makeStyles } from '@material-ui/core';
import {Grid,Paper} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import TapView from './TapView';
import PatientModal from './PatientModal';
import { Modal,Dropdown,Form } from 'react-bootstrap';




const useStyles = makeStyles((theme) =>({
  root: {
    flexGrow: 1,
    marginLeft: '270px',
    marginRight:'15px',

  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  another:{
    marginTop:'100px',
    color:'black',
  },
 avatars:{
   marginTop:'90px',
   width:'95%',
  height:'100%',
  borderTop: '#007bff solid 3px',
 },
 otherStyle:{
  width:'95%',
  marginTop:'20px',   
  height:'100%',
  borderTop: '#007bff solid 3px',
 },
 stylepaper:{
  marginTop:'20px',
  width:'95%',
 height:'90%',
 textAlign:'left',
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
  marginTop:'70px',
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
addingMargin:{
  marginLeft:'30px',

},
styleAbout:{
  height:'40px',
  borderBottom:'grey  solid 1px',
  backgroundColor:'#007bff',
  padding:'5px',
  color:'white'
},
stylesub:{
  height:'50px',
  borderBottom:'grey  solid 1px',
  padding:'8px',
},
increaseHeight:{
  height:'400px',
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
     
  <Grid container>
    <Grid item xs={3} className={classes.gridone}>
      <Grid item xs={12} className={classes.increaseHeight}>

             <Paper className={classes.paper, classes.avatars}> 
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

               <Button variant="primary"  onClick={handleShow} className={classes.margin, classes.buttons}>       
                 Get Doctor
                </Button>
           <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Grid item xs={12} >
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className = "bankstyle">ID</Form.Label>
                <Form.Control type="text" placeholder="" />
                </Form.Group>
                </Grid>

              </Modal.Body>
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
        <Paper className={classes.paper, classes.otherStyle} > 
        <div className={classes.paper,classes.stylesub}>
        <Grid container spacing={3}>

              <Grid item xs = {6}>
                <h4>Subscription</h4>
              </Grid>

              <Grid item xs = {6}>
              <Dropdown className={classes.margin, classes.addingMargin}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                Activate
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Treatment</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Subscription</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
       
             
              </Grid>

              </Grid>


        </div>

        <Grid container spacing={3}>

          <Grid item xs = {6}>
          <div style={{background:"red"}}>

          </div>
          </Grid>

          <Grid item xs = {6}>
          <p>
            Location
          </p>

          <p>
            Babajide Ogundipe, PT, Oxon Hill Road, Oxon Hill, MD, USA
          </p>
          </Grid>

</Grid>
        </Paper>
        
        </Grid>

        <Grid item xs={12}>

        <Paper className={classes.paper, classes.stylepaper} spacing= {1}> 

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

        <Grid item xs={9}>
          <Paper className={classes.paper, classes.another} >
          <TapView/>
            
          </Paper>
        </Grid>
      </Grid>
 
      </div>
   
    
  );
}

export default Viewdirect;