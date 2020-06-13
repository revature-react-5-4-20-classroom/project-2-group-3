import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, Button } from "reactstrap";

import { NavLink, withRouter } from 'react-router-dom';
import { IState } from "../../redux/reducers";

import { loginSavePatient} from "../../redux/action-mappers";
import { connect } from "react-redux";

export class PatientNavigationComponent extends React.Component<any,any>{


    logoutUser = (e: any) => {
   
        // console.log(this.props.location.pathname)
        this.props.loginSavePatient(null);
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
        <NavLink  to="/patient/appointments" className="nav-link" activeClassName="active">Appointments</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/patient/newappointment" className="nav-link" activeClassName="active">New Appointment</NavLink>
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
loginSavePatient
  
  
  }
  
  
  export let  PatientNavigationComponentS = connect(mapStateToProps, mapDispatchToProps)( PatientNavigationComponent);
  export let PatientNavigationComponentSW=withRouter( PatientNavigationComponentS);