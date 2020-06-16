

import React from "react";
import { Container, Row, Col, NavItem, ButtonToggle } from "reactstrap";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { DepartmentDoctorsComponent, DepartmentDoctorsComponentR } from "./departmentDoctors";






export class NewAppointmentComponent extends React.Component<any, any>{


    constructor(props: any) {
        super(props);
this.state={
    change:false,
    id:null
}
    }

    cardio=()=>{
        this.props.history.push("/patient/newappointment/cardiology")
        let change=!this.state.change;
        this.setState({
            change:change,
            id:1
        })
    }

    neuro=()=>{
        this.props.history.push("/patient/newappointment/neurology")
        let change=!this.state.change;
        this.setState({
            change:change,
            id:2
        })
    }


    uro=()=>{
        this.props.history.push("/patient/newappointment/urology")
        let change=!this.state.change;
        this.setState({
            change:change,
            id:3
        })
    }

    render() {
        //will have all the departmetns listed  and when we click on it redirects will list all the   1 and 11

        return (

            <Container fluid>
                <Row>
                   
                        <Col sm="5" >


                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">

                                    <NavItem>
                                       
                                        <ButtonToggle onClick={this.cardio} outline color="info" className="mb-2" >Cardiology</ButtonToggle>
                                    </NavItem>
                                    <NavItem>
                                      
                                        <ButtonToggle onClick={this.neuro} outline color="info" className="mb-2" >Neurology</ButtonToggle>
                                    </NavItem>
                                    <NavItem>
                                    <ButtonToggle onClick={this.uro} outline color="info" className="mb-2" >Urology</ButtonToggle>
                                        {/* <NavLink to="/patient/newappointment/urology" className="nav-link " activeClassName="active">urology</NavLink> */}
                                    </NavItem>
                                </ul>
                            </nav>

                            {/* this componets mus thave an update method */}

                        </Col>
                        <Col sm="10">
                        
                        {this.state.id&&
                        <DepartmentDoctorsComponentR departmentid={this.state.id}/>
                        }

                         </Col>

                           

                  
                </Row>
            </Container>









        )
    }


}

export let  NewAppointmentComponentR=withRouter( NewAppointmentComponent)