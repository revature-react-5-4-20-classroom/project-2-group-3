import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, Button } from "reactstrap";

import { NavLink, withRouter } from 'react-router-dom';
import { IState } from "../../redux/reducers";
import { loginSaveDoctor,loginSavePatient } from "../../redux/action-mappers";
import { connect } from "react-redux";



export class DoctorNavigationComponent extends React.Component<any,any>{



    logoutUser = (e: any) => {
   
        // console.log(this.props.location.pathname)
        this.props.loginSaveDoctor(null);
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
        <NavLink  to="/doctor/appointments" className="nav-link" activeClassName="active">View Appointments</NavLink>
      </NavItem>
      <NavItem>
        <NavLink  to="/patients" className="nav-link" activeClassName="active">Patients</NavLink>
      </NavItem>
      <NavItem className="float-right" tag={() => { return <Button className="float-right" onClick={this.logoutUser} color="primary" outline>Logout</Button> }} />
    
    


    </Nav>
    
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
loginSaveDoctor,
loginSavePatient
  
  
  }
  
  
  export let DoctorNavigationComponentS = connect(mapStateToProps, mapDispatchToProps)(DoctorNavigationComponent);
  export let DoctorNavigationComponentSW=withRouter(DoctorNavigationComponentS);