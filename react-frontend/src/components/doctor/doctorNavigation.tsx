import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";

import { NavLink, withRouter } from 'react-router-dom';



export class DoctorNavigationComponent extends React.Component<any,any>{


    render(){

return(


<>
    <Navbar  color="light" light expand="md">

    <Nav  tabs className="w-100">
    <NavbarBrand>
                  
               
              </NavbarBrand>
      <NavItem>
        <NavLink  to="/doctor/appointments" className="nav-link" activeClassName="active">View Appointments</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="" className="nav-link" activeClassName="active">New Appointment Latere</NavLink>
      </NavItem>
    
    


    </Nav>
    
  </Navbar>
  </>

)

    }



    
}