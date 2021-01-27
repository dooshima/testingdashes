import React from 'react';
import './../App.css' ;
import {makeStyles } from '@material-ui/core';
import {Grid,Paper} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import  Tap  from './TapView';


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
      marginTop:'80px',
    },
 typo:{
    color: 'white',
    height:'40px'
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
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12}  className={classes.load} sm container style={{background: '#28a745'}} >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h3" className={classes.typo}>
                  7773
                </Typography>
                <Typography variant="h6" gutterBottom className={classes.typo}>
                 Patient
                </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.typo}>
                 More Info
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#dc3545'}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#17a2b8'}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>
      
      </Grid>


      <Grid container spacing={3}>
          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12}  className={classes.load} sm container style={{background: '#dc3545'}} >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#007bff'}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#ffc107'}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>
      
      </Grid>

      <Grid container spacing={3}>
          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12}  className={classes.load} sm container style={{background: '#28a745'}} >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#007bff'}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12} sm container className={classes.load} style={{background: '#28a745'}}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>
      
      </Grid>

      <Grid container spacing={3}>
          <Grid item xs={4} >
                <Paper className={classes.paper} spacing= {20}>          
                <Grid item xs={12}  className={classes.load} sm container style={{background: '#17a2b8'}} >
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" className={classes.typo}>
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.typo}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
          </Grid>
          </Grid>
          </Paper>
          </Grid>

      
      </Grid>
      </div>


   
    
  );
    
}