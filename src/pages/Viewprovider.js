import React from 'react';
import './../App.css' ;
import {makeStyles } from '@material-ui/core';
import {Grid,Paper} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import {Button} from 'react-bootstrap';
import TapProvider  from './TapProvider';
import Sidebar from  '../components/Sidebar';

 

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
  height:'55%',
  borderTop: 'blue solid 3px',
 },
 large: {
  width: theme.spacing(9),
  height: theme.spacing(9),
  marginLeft:'60px',
  marginTop:'30px',
},

typo:{
  marginTop:'110px',
  marginLeft:'70px',
},
h2:{
  marginLeft:'50px',
},
buttons:{
  display:'flex',
  justifyContent:'right',
  marginLeft:'50px',

},
stylep:{
  marginLeft:'80px',

}

}));

function Viewprovider () {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
       <Sidebar />

    <Grid container spacing={2}>
          <Grid item xs={3} >
             <Paper className={classes.paper, classes.avatars} spacing= {1}> 
             <Avatar src="/broken-image.jpg" className={classes.large} />
            
             <h3 variant="h4" gutterBottom className={classes.h2}>
                John Doe
                </h3>
               <p   className={ classes.stylep}> 
                Patient
                </p>

              <div>
                <Button variant="primary" color="primary" className={classes.margin, classes.buttons}>
                    Change Password
                </Button>
              </div>
              
            </Paper>

           
         
        </Grid>

        <Grid item xs={9}>
          <Paper className={classes.paper, classes.another} spacing= {3}>
          <TapProvider/>
            
          </Paper>
        </Grid>
      </Grid>
 
      </div>
   
    
  );
}

export default Viewprovider;