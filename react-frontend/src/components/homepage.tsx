
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HomeNavigationComponent } from './HomeNavigation';
import { PatientLoginComponent, PatientLoginComponentR } from './patients/patientLogin';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import download from "./download.jpg"
import patient from './for-patients.jpg';
export class HomePageComponent extends React.Component {


    render(){
        return(
<>
<Jumbotron className="text-center" >
<h1>JDJ HEALTHCARE</h1>
</Jumbotron>
<Container fluid>
    <Row>
<Col sm="12">
<div >
<h4 id="homeinfo">We are considered to be one of the top hospitals in the country, we deliver high quality advanced speciality care with a hearty dose of kindness and compassion.</h4>
 
</div>
 
 
</Col>
  </Row>
  <Row>
<Col sm="6">
 <img src={download} width="90%" height="90%" className="image-fluid" alt="doctor"/> 
</Col>
<Col sm="6">
 <img src={patient} width="90%" height="90%" className="image-fluid" alt="doctor"/> 
</Col>
 
  </Row>
</Container>
<Container>
<Row>
<Col>
 
 
 
</Col>
 
 
</Row>
 
 
</Container>







</>




        )
    }









}