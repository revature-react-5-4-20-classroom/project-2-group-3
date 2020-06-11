import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HomePageComponent } from './components/homepage';
import { PatientLoginComponentR, PatientLoginComponent } from './components/patients/patientLogin';
import { HomeNavigationComponent } from './components/HomeNavigation';
import { PatientHomeComponent } from './components/patients/patienthome';

function App() {
  return (
  

    <Router>
<Switch>
<Route path="/patientlogin">
  <PatientLoginComponentR/>
</Route>
<Route path="/doctorlogin">
  
</Route>


<Route path="/patient/home">
<PatientHomeComponent/>
</Route>

<Route path={["/home","*"]}>
<HomeNavigationComponent/>
<HomePageComponent/>
</Route>




</Switch>



    </Router>






  );
  
}

export default App;
