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
          <NavLink  to="/patientlogin" className="nav-link" activeClassName="active">Patient</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/doctorlogin" className="nav-link" activeClassName="active">Doctor</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/home" className="nav-link" activeClassName="active">home</NavLink>
        </NavItem>
      
      


      </Nav>
      {/* <NavItem className="float-right" tag={() => { return <Button className="float-right" onClick={this.logoutUser} color="primary" outline>Logout</Button> }} /> */}
    </Navbar>



  </div>





)


    }



    
}