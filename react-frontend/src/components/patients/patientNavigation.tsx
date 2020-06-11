import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";

import { NavLink, withRouter } from 'react-router-dom';



export class PatientNavigationComponent extends React.Component<any,any>{


    render(){

return(


<>
    <Navbar  color="light" light expand="md">

    <Nav  tabs className="w-100">
    <NavbarBrand>
                  
               
              </NavbarBrand>
      <NavItem>
        <NavLink  to="/patient/appointments" className="nav-link" activeClassName="active">Appointments</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/doctorlogin" className="nav-link" activeClassName="active">New Appointment</NavLink>
      </NavItem>
    
    


    </Nav>
    {/* <NavItem className="float-right" tag={() => { return <Button className="float-right" onClick={this.logoutUser} color="primary" outline>Logout</Button> }} /> */}
  </Navbar>
  </>

)

    }



    
}