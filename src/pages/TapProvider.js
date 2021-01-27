import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Profile  from './Profile';
import PatientTransaction  from './PatientTransaction';
import PatientHealth  from './PatientHealth';
import PatientActivity  from './PatientActivity';
import Provideroverview  from './Provideroverview';
import Providereview  from './Providereview';
import Providerdetails  from './Providerdetails';
import Providertransaction  from './Providertransaction';
import Provideractivity from './Provideractivity';


const TapProvider = () => {
  
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
                  className='labeling'
                  aria-label="disabled tabs example"
                >
                  <Tab label="Overview"  onClick={Provideroverview}/>
                  <Tab label="Review" onClick={Providereview} />
                  <Tab label="Bank Details" onClick={Providerdetails}/>
                  <Tab label="Transaction" onClick={Providertransaction}/>
                  <Tab label="Activity Log"onClick={Provideractivity} />

                </Tabs>

          {value === 0 && <Provideroverview/>}
          {value === 1 && <Providereview/>}
          {value === 2 && <Providerdetails/>}
          {value === 3 && <Providertransaction/>}
          {value === 4 && <Provideractivity/>}


     
    </>
  );
};

export default TapProvider;