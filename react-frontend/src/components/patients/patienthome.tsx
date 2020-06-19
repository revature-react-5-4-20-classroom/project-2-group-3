import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PatientNavigationComponent, PatientNavigationComponentSW } from "./patientNavigation";
import { PatientAppointmentComponent, PatientAppointmentComponentW } from "./patientAppointment";
import { NewAppointmentComponent, NewAppointmentComponentR } from "./newAppointment";
import { RecordPatientComponentS } from "./recordpatient";
import { PatientCardComponentS } from "./patientCard";
import { EmergencyComponentS } from "./emergency";



export class PatientHomeComponent extends React.Component<any,any>{


    render(){

return(
    

    <>
  

    <Router>
        <PatientNavigationComponentSW/>
        <Switch>
            <Route path="/patient/appointments"> 
           <PatientAppointmentComponentW/>
            </Route>
            <Route path="/patient/newappointment">    
<NewAppointmentComponentR/>
            </Route>
            <Route path="/patient/emergency">    
<EmergencyComponentS/>
            </Route>
            <Route path="/patient/record">    
< RecordPatientComponentS/>
            </Route>



            <Route path={["/patient/home", "*"]}>
<PatientCardComponentS/>
            </Route>




        </Switch>




    </Router>





    </>
      
)
        
    }


}