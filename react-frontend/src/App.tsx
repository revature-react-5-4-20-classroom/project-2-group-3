import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HomePageComponent } from './components/homepage';
import { PatientLoginComponentR, PatientLoginComponent } from './components/patients/patientLogin';
import { HomeNavigationComponent } from './components/HomeNavigation';
import { PatientHomeComponent } from './components/patients/patienthome';
import { DoctorLoginComponent, DoctorLoginComponentR } from './components/doctor/doctorlogin';
import { DoctorHomeComponent } from './components/doctor/doctorHome';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
  
<Provider store={store}>
    <Router>
<Switch>
<Route path="/patientlogin">
  <PatientLoginComponentR/>
</Route>
<Route path="/doctorlogin">
  <DoctorLoginComponentR/>
</Route>


<Route path="/patient/home">
<PatientHomeComponent/>
</Route>

<Route path="/doctor/home">
<DoctorHomeComponent/>
</Route>

<Route path={["/home","*"]}>
<HomeNavigationComponent/>
<HomePageComponent/>
</Route>




</Switch>



    </Router>
    </Provider>





  );
  
}

export default App;
