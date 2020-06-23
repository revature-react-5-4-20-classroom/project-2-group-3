import { connect } from "react-redux";


import React from "react";
import { IState } from "../../redux/reducers";
import { Patient } from "../../models/patient";
import { Row, Container, Col, Card, CardBody, ListGroupItem, ListGroup } from "reactstrap";
import { LastRecord } from "../../models/lastRecord";


export class RecordPatientComponent extends React.Component<any,any>{


    render(){


if(this.props.patient&&this.props.patient.lastRecord){
    let record:LastRecord=this.props.patient.lastRecord;
    return(
<>
<Container>
<Row>
<Col>
<Card>
<CardBody>
<ListGroup>
    <ListGroupItem>Height: {record.height}</ListGroupItem>
    <ListGroupItem>Weight: {record.weight}</ListGroupItem>
    <ListGroupItem>Age: {record.age}</ListGroupItem>
    <ListGroupItem>diagnosis: {record.diagnosis}</ListGroupItem>
    <ListGroupItem>prescribed Action: {record.prescribedAction}</ListGroupItem>
    <ListGroupItem>prescribed Medication: {record.prescribedMedication}</ListGroupItem>
    <ListGroupItem>Notes: {record.notes}</ListGroupItem>
   


</ListGroup>



</CardBody>



</Card>



</Col>
</Row>
</Container>



</>




    )
}else{
    return(
        <p>No records</p>
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
  
  
  export let  RecordPatientComponentS = connect(mapStateToProps, mapDispatchToProps)(  RecordPatientComponent);
 