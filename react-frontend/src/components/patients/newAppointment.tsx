

import React from "react";
import { Container, Row, Col, NavItem } from "reactstrap";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { DepartmentDoctorsComponent } from "./departmentDoctors";






export class NewAppointmentComponent extends React.Component<any, any>{


    constructor(props: any) {
        super(props);

    }

    render() {
        //will have all the departmetns listed  and when we click on it redirects will list all the   1 and 11

        return (

            <Container fluid>
                <Row>
                    <Router>
                        <Col sm="2" >


                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">

                                    <NavItem>
                                        <NavLink to="/patient/newappointment/cardiology" className="nav-link " activeClassName="active">Cardiology</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/patient/newappointment/neurology" className="nav-link " activeClassName="active">Neurology</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/patient/newappointment/urology" className="nav-link " activeClassName="active">urology</NavLink>
                                    </NavItem>
                                </ul>
                            </nav>

                            {/* this componets mus thave an update method */}

                        </Col>
                        <Col sm="10">

                            <Switch>
                                {/* <Route path="/patient/newappointment/cardiology"> */}

                                {/* <Route path="/patient/newappointment/cardiology" render={(props)=>{return<DepartmentDoctorsComponent departmentid="1" {...props}/>}}/> */}

                                <Route path="/patient/newappointment/cardiology">

                                    <DepartmentDoctorsComponent departmentid="1" />
                                </Route>

                                <Route path="/patient/newappointment/neurology"  >

                                    <DepartmentDoctorsComponent departmentid="2" />
                                </Route>


                                <Route path="/patient/newappointment/urology">
                                    <DepartmentDoctorsComponent departmentid="3" />
                                </Route>



                            </Switch>



                        </Col>
                    </Router>
                </Row>
            </Container>









        )
    }


}