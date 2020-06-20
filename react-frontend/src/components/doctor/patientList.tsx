import React from 'react';
import { Container, Row, Col, Card, CardBody, ListGroup, ListGroupItem, UncontrolledCollapse, Button, Collapse } from 'reactstrap';
import { Patient } from '../../models/patient';
import { getPatients } from '../../api/apidoctor';
import { PhysicalRecordModal } from './physicalRecordModal';
import {withRouter} from "react-router-dom"
import { LastRecord } from '../../models/lastRecord';

interface PatientListComponentState {
    patients : Patient[];
    isOpen : boolean;
    lastRecordIndex : number;
    patientIndex : number;
}
export class PatientListComponent extends React.Component<any,PatientListComponentState> {
    constructor(props:any){
        super(props)
        this.state = {
            patients : [],
            isOpen : false,
            lastRecordIndex : 0,
            patientIndex : 0,
        }
    }   
    
    toggleModal = () => {
        this.setState({
            isOpen : !this.state.isOpen,
        })
    }

    componentDidMount = async () => {
        this.setState({
            patients : await getPatients()
        })
    }

    makeModal = (event:any) => {
        this.setState({
            lastRecordIndex : event.target.value
        })
        this.toggleModal()
    }
    routeAppointment = (event:any) => {
        this.setState({
            patientIndex : event.target.value
        })
        this.props.history.push({
            pathname: "/patients/newappointment",
            state : {
                patient : this.state.patients[this.state.patientIndex]
            }
        })
    }

    showPatients = () => {
        return this.state.patients.map( (patient,index) => {
            let patientFullName = `${patient.firstName} ${patient.lastName}`;
            return (
                <div>
                    <Col>
                        <Card>
                            <CardBody>
                                <ListGroup>
                                    <ListGroupItem>
                                        Patient Id: {patient.patientId}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Patient: {patientFullName}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Gender: {patient.gender}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Birth Date: {patient.birthDate}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Username: {patient.username}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Email: {patient.email}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Phone Number: {patient.phone}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Address: {patient.address}
                                    </ListGroupItem>
                                </ListGroup> 
                                {patient.lastRecord ? <Button value={index} color="info" onClick={this.makeModal}>More</Button> : <></>}
                                <Button value={index} onClick={this.routeAppointment}>Make Appointment</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    {this.state.isOpen && patient.lastRecord ? <PhysicalRecordModal lastRecord={this.state.patients[this.state.lastRecordIndex].lastRecord} isOpen={this.state.isOpen} toggleModal={this.toggleModal}/> : <></>}
                </div>
            )
        })
    }

    render () {
        return (
            <Container>
                <Row>
                    {this.showPatients()}
                </Row>
            </Container>
        )
    }
}

export const PatientListComponentR = withRouter(PatientListComponent);