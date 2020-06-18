import React from 'react';
import { Container, Row, Col, Card, CardBody, ListGroup, ListGroupItem, UncontrolledCollapse, Button, Collapse } from 'reactstrap';
import { Patient } from '../../models/patient';
import { getPatients } from '../../api/apidoctor';
import { PhysicalRecordModal } from './physicalRecordModal';

interface PatientListComponentState {
    patients : Patient[];
    isOpen : boolean;
}
export class PatientListComponent extends React.Component<any,PatientListComponentState> {
    constructor(props:any){
        super(props)
        this.state = {
            patients : [],
            isOpen : false,
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

    showPatients = () => {
        return this.state.patients.map( (patient) => {
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
                                {patient.lastRecord ? <Button color="info" onClick={this.toggleModal}>More</Button> : <></>}
                            </CardBody>
                        </Card>
                    </Col>
                    {this.state.isOpen && patient.lastRecord ? <PhysicalRecordModal lastRecord={patient.lastRecord} isOpen={this.state.isOpen} toggleModal={this.toggleModal}/> : <></>}
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