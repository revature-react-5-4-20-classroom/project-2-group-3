import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, Button } from "reactstrap";

import { NavLink, withRouter } from 'react-router-dom';
import { IState } from "../../redux/reducers";

import { loginSavePatient,loginSaveDoctor} from "../../redux/action-mappers";
import { connect } from "react-redux";

export class PatientNavigationComponent extends React.Component<any,any>{


    logoutUser = (e: any) => {
   
        // console.log(this.props.location.pathname)
        this.props.loginSavePatient(null);
        this.props.loginSaveDoctor(null);
        this.props.history.push("/home");
    
    
      }



    render(){

return(


<>
    <Navbar  color="light" light expand="md">

    <Nav  tabs className="w-100">
    <NavbarBrand>
                  
               
              </NavbarBrand>
              <NavItem>
        <NavLink  to="/patient/home" className="nav-link" activeClassName="active">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/patient/appointments" className="nav-link" activeClassName="active">Appointments</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/patient/newappointment" className="nav-link" activeClassName="active">New Appointment</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/patient/record" className="nav-link" activeClassName="active">Record</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/patient/emergency" className="nav-link" activeClassName="active">Emergency</NavLink>
      </NavItem>


      <NavItem className="float-right" tag={() => { return <Button className="float-right" onClick={this.logoutUser} color="primary" outline>Logout</Button> }} />
    
    


    </Nav>
    {/* <NavItem className="float-right" tag={() => { return <Button className="float-right" onClick={this.logoutUser} color="primary" outline>Logout</Button> }} /> */}
  </Navbar>
  </>

)

    }



    
}


const mapStateToProps = (state: IState) => {
 
    return {
      ...state.loginUser
    }
  
  }
  
  const mapDispatchToProps = {
loginSavePatient,
loginSaveDoctor

  
  
  }
  
  
  export let  PatientNavigationComponentS = connect(mapStateToProps, mapDispatchToProps)( PatientNavigationComponent);
  export let PatientNavigationComponentSW=withRouter( PatientNavigationComponentS);