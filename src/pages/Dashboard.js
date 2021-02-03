import React from 'react';
import './../App.css' ;
import {createMuiTheme,makeStyles } from '@material-ui/core';
import {Grid,Paper} from "@material-ui/core";
import { Typography,Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';


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

load:{
      marginTop:'20px',
    },

 typo:{
    color: 'white',
    height:'40px'
  },

  ButtonGreen:{
  width:'100%',
 backgroundColor:'#007500',
  margin:'0',
  color:'white'
 },   
 ButtonRed:{
  width:'100%',
  backgroundColor:'#A60027',
   margin:'0',
   color:'white'
 },
 ButtonLightBlue:{
  width:'100%',
  backgroundColor:'#0A758F',
   margin:'0',
   color:'white'
 },
 ButtonBlue:{
  width:'100%',
  backgroundColor:'#035CA3',
   margin:'0',
   color:'white'
 },
 ButtonYellow:{
  width:'100%',
  backgroundColor:'#E3AE09',
   margin:'0',
   color:'white'
 }
}));



export default function Dashboard () {
    const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12}  className={classes.load} sm container style={{background: '#00A300'}} >
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="h3" className={classes.typo}>
                7859
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                Patient Dashboard
                </Typography>
                <Button variant="success"  href="/Patientlog" className={classes.ButtonGreen}>       
                       More Info
                </Button>

              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#D40032'}}>
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  153
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                Provider Dashboard
                </Typography>
                <Button variant="success"  href="/Providerlog" className={classes.ButtonRed}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#0D98BA'}}>
            <Grid item xs container direction="column">
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  3
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                Pharmacy Dashboard
                </Typography>
                <Button variant="success" className={classes.ButtonLightBlue}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>
      
      </Grid>


      <Grid container spacing={3}>
          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12}  className={classes.load} sm container style={{background: '#D40032'}} >
            <Grid item xs container direction="column">
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  4
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                Laboratory Dashboard
                </Typography>
                <Button variant="success" className={classes.ButtonRed}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#088FFA'}}>
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  11
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                 Hosiptal Dashboard
                </Typography>
                <Button variant="success" className={classes.ButtonBlue}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#F6C324'}}>
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  6
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                Partners Dashboard
                </Typography>
                <Button variant="success" className={classes.ButtonYellow}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>
      
      </Grid>

      <Grid container spacing={3}>
          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12}  className={classes.load} sm container style={{background: '#00A300'}} >
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  6
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                 Users
                </Typography>
                <Button variant="success" href="/Profile" className={classes.ButtonGreen}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#088FFA'}}>
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  11
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                 Consultation
                </Typography>
                <Button variant="success" className={classes.ButtonBlue}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                <Grid item xs={12}  className={classes.load} sm container style={{background: '#00A300'}} >
            <Grid item xs container direction="column" >
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  6
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                Order log
                </Typography>
                <Button variant="success" className={classes.ButtonGreen}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>
      
      </Grid>

      <Grid container spacing={3}>
          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {10}>          
                 <Grid item xs={12} sm container className={classes.load} style={{background: '#0D98BA'}}>
            <Grid item xs container direction="column">
              <Grid item xs>
              <Typography gutterBottom variant="h3" className={classes.typo}>
                  3
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                 Call Log
                </Typography>
                <Button variant="success" className={classes.ButtonLightBlue}>       
                       More Info
                </Button>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

      
      </Grid>
      </div>


   
    
  );
    
}