import React from 'react';
import './../App.css' ;
import {makeStyles } from '@material-ui/core';
import {Grid,Paper} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Profile  from './Profile';
import Button from '@material-ui/core/Button';
import TapView from './TapView';


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
  marginLeft:'50px',
},
buttons:{
  marginLeft:'50px',
  padding:'10px',
  fontSize:'13px',
  backgroundColor:'#007bff',
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
}));

function Viewdirect () {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
     
    <Grid container spacing={3}>
          <Grid item xs={4} className={classes.gridone}>
          <Grid item xs={12}>

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
                <Button variant="contained" size="medium" color="primary" className={classes.margin, classes.buttons}>
                    Change Password
                </Button>
              </div>
               <div className = "changeButton">
                <Button variant="contained" size="medium" color="primary" className={classes.margin, classes.buttons}>
                 Charge Medflit Card
                </Button>
              </div>
            </Paper>

           </Grid>
           <Grid item xs={12}>

        <Paper className={classes.paper, classes.avatars} spacing= {6}> 


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
          <Paper className={classes.paper, classes.another} spacing= {10}>
          <TapView/>
            
          </Paper>
        </Grid>
      </Grid>
 
      </div>
   
    
  );
}

export default Viewdirect;