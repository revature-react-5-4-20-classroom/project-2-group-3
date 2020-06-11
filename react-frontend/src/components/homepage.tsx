
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HomeNavigationComponent } from './HomeNavigation';
import { PatientLoginComponent, PatientLoginComponentR } from './patients/patientLogin';


export class HomePageComponent extends React.Component {


    render(){
        return(
<>



<Router>
         {/* <HomeNavigationComponent/> */}
{/* <Switch>
<Route path="/patientlogin">
<PatientLoginComponentR/>
</Route>

<Route path="/doctorlogin">

</Route>


</Switch> */}


</Router>



</>




        )
    }









}