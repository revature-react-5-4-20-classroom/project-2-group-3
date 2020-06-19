import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PatientNavigationComponent, PatientNavigationComponentSW } from "./patientNavigation";
import { PatientAppointmentComponent } from "./patientAppointment";
import { NewAppointmentComponent } from "./newAppointment";



export class PatientHomeComponent extends React.Component<any,any>{


    render(){

return(
    

    <>
    <p>PateintHome</p>

    <Router>
        <PatientNavigationComponentSW/>
        <Switch>
            <Route path="/patient/appointments"> 
           <PatientAppointmentComponent/>
            </Route>
            <Route path="/patient/newappointment">    
<NewAppointmentComponent/>
            </Route>


            <Route path="*">
patient card
            </Route>




        </Switch>




    </Router>





    </>
      
)
        
    }


}