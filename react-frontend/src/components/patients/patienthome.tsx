import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PatientNavigationComponent } from "./patientNavigation";
import { PatientAppointmentComponent } from "./patientAppointment";



export class PatientHomeComponent extends React.Component<any,any>{


    render(){

return(
    

    <>
    <p>PateintHome</p>

    <Router>
        <PatientNavigationComponent/>
        <Switch>
            <Route path="/patient/appointments"> 
           <PatientAppointmentComponent/>
            </Route>
            <Route >    

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