import React from 'react';
import './../App.css' ;
import {makeStyles } from '@material-ui/core';
import {Grid,Paper} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TapProvider  from './TapProvider';

 

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
  //  width:'80%',
  height:'70%',
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

}));

function Viewprovider () {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
     
    <Grid container spacing={3}>
          <Grid item xs={3} >
             <Paper className={classes.paper, classes.avatars} spacing= {6}> 
             <Avatar src="/broken-image.jpg" className={classes.large} />
            
             <Typography variant="h4" gutterBottom className={classes.h2}>
                John Doe
                </Typography>
               <Typography variant="p" gutterBottom className={classes.typo}>
                Patient
                </Typography>
                

            
              <div>
                <Button variant="outlined" size="medium" color="primary" className={classes.margin, classes.buttons}>
                    Change Password
                </Button>
              </div>
              
            </Paper>

           
         
        </Grid>

        <Grid item xs={9}>
          <Paper className={classes.paper, classes.another} spacing= {6}>
          <TapProvider/>
            
          </Paper>
        </Grid>
      </Grid>
 
      </div>
   
    
  );
}

export default Viewprovider;