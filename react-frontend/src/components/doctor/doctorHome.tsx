



import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DoctorAppointmentComponent } from "./doctorAppointments";
import { DoctorNavigationComponent } from "./doctorNavigation";




export class DoctorHomeComponent extends React.Component<any,any>{


    render(){

return(
    

    <>
    <p>DoctorHome</p>

    <Router>
    <DoctorNavigationComponent/>
        <Switch>
            <Route path="/doctor/appointments"> 
        <DoctorAppointmentComponent/>
            </Route>
            <Route path="/patient/newappointment">    

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