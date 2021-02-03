import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { Patientlog } from './pages/Patientlog';
import Viewdirect  from './pages/Viewdirect';
import TapView  from './pages/TapView';
import Profile  from './pages/Profile';
import PatientTransaction  from './pages/PatientTransaction';
import PatientHealth  from './pages/PatientHealth';
import PatientActivity  from './pages/PatientActivity';
import Providerlog from './pages/Providerlog';
import Viewprovider from './pages/Viewprovider';
import Provideroverview from './pages/Provideroverview';
import Providereview from './pages/Providereview';
import Providerdetails from './pages/Providerdetails';
import Providertransaction from './pages/Providertransaction';
import Provideractivity from './pages/Provideractivity';
import Consultationlog from './pages/Consultationlog';
import PatientModal from './pages/PatientModal';
import viewConsultation from './pages/viewConsultation';
import directConsultation from './pages/directConsultation';
import nextDirectConsulation from './pages/nextDirectConsulation';
import consultationcurrent from './pages/consultationcurrent';
import consultationpage from './pages/consultationpage';


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/Patientlog' exact component={Patientlog} />
        <Route path='/TapView' exact component={TapView} />
        <Route path='/Viewdirect' exact component={Viewdirect} />
        {/* <Route exact path='/Viewdirect/:Profile' render = {props => <Viewdirect {...props} />} /> */}
        <Route path='/Profile' exact component={Profile} />
        <Route path='/PatientTransaction' exact component={PatientTransaction} />
        <Route path='/PatientHealth' exact component={PatientHealth} />
        <Route path='/PatientActivity' exact component={PatientActivity} />
        <Route path='/Providerlog' exact component={Providerlog} />
        <Route path='/Viewprovider' exact component={Viewprovider} />
        <Route path='/Provideroverview' exact component={Provideroverview} />
        <Route path='/Providereview' exact component={Providereview} />
        <Route path='/Providerdetails' exact component={Providerdetails} />
        <Route path='/Providertransaction' exact component={Providertransaction} />
        <Route path='/Provideractivity' exact component={Provideractivity} />
        <Route path='/Consultationlog' exact component={Consultationlog} />
        <Route path='/PatientModal' exact component={PatientModal} />
        <Route path='/viewConsultation' exact component={viewConsultation} />
        <Route path='/directConsultation' exact component={directConsultation} />
        <Route path='/nextDirectConsulation' exact component={nextDirectConsulation} />
        <Route path='/consultationcurrent' exact component={consultationcurrent} />
        <Route path='/consultationpage' exact component={consultationpage} />

                  
        
      </Switch>
    </Router>
  );
}

export default App;
