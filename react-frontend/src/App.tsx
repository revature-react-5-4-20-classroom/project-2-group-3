import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HomePageComponent } from './components/homepage';
import { PatientLoginComponentR, PatientLoginComponent, PatientLoginComponentRW } from './components/patients/patientLogin';
import { HomeNavigationComponent } from './components/HomeNavigation';
import { PatientHomeComponent } from './components/patients/patienthome';
import { DoctorLoginComponent, DoctorLoginComponentR } from './components/doctor/doctorlogin';
import { DoctorHomeComponent } from './components/doctor/doctorHome';
import { Provider, connect } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import { IState } from './redux/reducers';
import { loginSaveDoctor, loginSavePatient } from "./redux/action-mappers";
import { render } from '@testing-library/react';
import { Doctor } from './models/doctor';
import { Patient } from './models/patient';
import { Department } from './models/department';
import { CreateAccountComponent, CreateAccountComponentW } from './components/patients/createAccount';
import { EXpNewAppointmentComponent } from './components/patients/ExpNewAppointment';


export class App extends React.Component<any,any> {

  constructor(props:any){

    super(props);
     this.state={
       doctor:null,
     patient:null
     }
  }


  
   







  render() {

if(this.props.doctor===null&&this.props.patient===null){
  return(
    <Router>
    <Switch>
<Route path="/createaccount">
<CreateAccountComponentW/>
</Route>

    <Route path="/patientlogin">
      <PatientLoginComponentRW/>
    </Route>
    <Route path="/doctorlogin">
      <DoctorLoginComponentR/>
    </Route>
    
{/*     
    <Route path="/patient/home">
    <PatientHomeComponent/>
    </Route>
    
    <Route path="/doctor/home">
    <DoctorHomeComponent/>
    </Route> */}
    
    <Route path={["/home","*"]}>
    <HomeNavigationComponent/>
    <HomePageComponent/>
    </Route>
    
    
    
    
    </Switch>
    
    
    
        </Router>






  )
}





    
    return(


  <>
    <Router>
<Switch>
<Route path="/createaccount">
<CreateAccountComponentW/>
</Route>
<Route path="/patientlogin">
  <PatientLoginComponentRW/>
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
  
  
    <ToastContainer />
  

</>




)
// }
};
  
}

export default App;


const mapStateToProps = (state: IState) => {
 
  return {
    ...state.loginUser
  }

}

const mapDispatchToProps = {
loginSaveDoctor,
loginSavePatient


}


export let AppS = connect(mapStateToProps, mapDispatchToProps)(App);
