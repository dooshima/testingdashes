import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Profile  from './Profile';
import PatientTransaction  from './PatientTransaction';
import PatientHealth  from './PatientHealth';
import PatientActivity  from './PatientActivity';



const TapView = (id) => {
  // console.warn(id);
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    < >
       <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                  aria-label="disabled tabs example"
                >
                  <Tab label="Profile"  onClick={Profile}/>
                  <Tab label="Transaction" onClick={PatientTransaction} />
                  <Tab label="Health Report" onClick={PatientHealth}/>
                  <Tab label="Activity Log"onClick={PatientActivity} />

                </Tabs>

          {value === 0 && <Profile id ={id}/>}
          {value === 1 && <PatientTransaction/>}
          {value === 2 && <PatientHealth/>}
          {value === 3 && <PatientActivity/>}


     
    </>
  );
};

export default TapView;