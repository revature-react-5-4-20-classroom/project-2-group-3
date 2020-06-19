
import React from "react";
import { Table, Container, Row, Col, Card, CardBody, ListGroup, ListGroupItem, Button, Modal } from "reactstrap";
import { store } from "../../redux/store";
import { Appointment } from "../../models/appointment";
import { getAppointments } from "../../api/apidoctor";
import { UpdateAppointmentModal } from "./updateAppointmentModal";

interface DoctorAppointmentComponentState {
    appointments : Appointment[],
    displayModal: boolean,
}


export class DoctorAppointmentComponent extends React.Component<any,DoctorAppointmentComponentState>{

constructor(props:any) {
    super(props);
    this.state = {
        appointments : [],
        displayModal : false,
    }
}

toggleModal = () => {
    this.setState({
        displayModal : !this.state.displayModal
    })
}

componentDidMount = async () => {
    this.setState({
        appointments : await getAppointments(store.getState().loginUser.doctor.doctorId)
    })
}

changeAppointments = async () => {
    this.setState({
        appointments : await getAppointments(store.getState().loginUser.doctor.doctorId)
    })
}

showAppointments() {
    return this.state.appointments.map( (app) => {
        let patientFullName = `${app.patient.firstName} ${app.patient.lastName}`;
        return (
            <div key={app.appointmentId}>
                <Col>
                    <Card>
                        <CardBody>
                            <ListGroup>
                                <ListGroupItem>
                                    Appointment Id: {app.appointmentId}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Patient: {patientFullName}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Date: {app.dateSlot}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Status: {app.status.statusName}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Type: {app.type.typeName}
                                </ListGroupItem>
                                <ListGroupItem>
                                    Details: {app.details}
                                </ListGroupItem>  
                            </ListGroup>
                            <Button onClick={this.toggleModal} color="info">Update</Button>
                        </CardBody>
                    </Card>
                </Col>
                {this.state.displayModal ? <UpdateAppointmentModal changeAppointments={this.changeAppointments} appointment={app} toggleModal={this.toggleModal} displayModal={this.state.displayModal}/> : <></>}
            </div>
        )
    })
}

render(){

return(

<>
{/* <p>Hellos here will be all the appointments related to him sorted by date</p> */}
<Container>
    <Row>
        {this.state.appointments.length > 0 ? this.showAppointments() : <p>No Appointments</p>}        
    </Row>
</Container>
</>

)



}





}


