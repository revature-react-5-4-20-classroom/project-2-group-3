import React from "react";
import { NavbarBrand, Navbar, Nav, NavItem } from "reactstrap";

import { NavLink, withRouter } from 'react-router-dom';

export class HomeNavigationComponent extends React.Component<any,any>{

    render(){

return(

    <div>
    <Navbar  color="light" light expand="md">

      <Nav  tabs className="w-100">
      <NavbarBrand>
                    
                 
                </NavbarBrand>
                <NavItem>
          <NavLink  to="/home" className="nav-link" activeClassName="active">home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/patientlogin" className="nav-link" activeClassName="active">Patient</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/doctorlogin" className="nav-link" activeClassName="active">Doctor</NavLink>
        </NavItem>
       
        <NavItem>
          <NavLink  to="/createaccount" className="nav-link" activeClassName="active">Create Account</NavLink>
        </NavItem>
      
      


      </Nav>
   
    </Navbar>



  </div>





)


    }



    
}