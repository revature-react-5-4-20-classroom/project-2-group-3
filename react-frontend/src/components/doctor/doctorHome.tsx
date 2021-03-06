



import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DoctorAppointmentComponent } from "./doctorAppointments";
import { DoctorNavigationComponent, DoctorNavigationComponentS, DoctorNavigationComponentSW } from "./doctorNavigation";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import { DoctorLoginComponentR } from "./doctorlogin";
import { PatientListComponent, PatientListComponentR } from "./patientList";
import { DoctorNewAppointment, DoctorNewAppointmentR } from "./doctorNewAppointment";




export class DoctorHomeComponent extends React.Component<any,any>{


    render(){

return(
    

    <>
  
<Provider store={store}>
    
    <Router>
    <DoctorNavigationComponentSW/>
        <Switch>
            <Route path="/doctor/appointments"> 
        <DoctorAppointmentComponent/>
            </Route>
            <Route path="/patients/newappointment">
                <DoctorNewAppointmentR />
            </Route>
            <Route path="/patients">    
                <PatientListComponentR/>
            </Route>
            

            <Route path="*">
            </Route>




        </Switch>




    </Router>



    </Provider>

    </>
      
)
        
    }


}