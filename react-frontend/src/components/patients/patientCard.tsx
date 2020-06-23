import React from "react";
import { IState } from "../../redux/reducers";
import { CardBody, Card, Container, Row, Col, CardHeader } from "reactstrap";
import { Patient } from "../../models/patient";
import { connect } from "react-redux";



export class PatientCardComponent extends React.Component<any,any>{




    render(){


    if(this.props.patient){
        let patient:Patient=this.props.patient;
        return(
<Container fluid>
<Row>
    <Col sm="6">




<Card  id="patientcard">
    <CardHeader>
        <h2>{patient.firstName.toUpperCase()} {patient.lastName.toUpperCase()}</h2>
        </CardHeader>
<CardBody>
        <p> Gender: {patient.gender}</p>
        <p>BirthDate: {patient.birthDate}</p>
        <p>Address: {patient.address}</p>
        <p>Phone: {patient.phone}</p>
        <p>Email: {patient.email}</p>




</CardBody>


</Card>
</Col>
</Row>
</Container>






        )
    }else{
        return(
            <p></p>
        )
    }






    }
}


const mapStateToProps = (state: IState) => {
 
    return {
      ...state.loginUser
    }
  
  }
  
  const mapDispatchToProps = {


  
  
  }
  
  
  export let   PatientCardComponentS = connect(mapStateToProps, mapDispatchToProps)(   PatientCardComponent);