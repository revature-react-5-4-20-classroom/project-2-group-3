import React from 'react';
import { Modal, Container, Form, FormGroup, Label, Input, Button, ModalFooter } from 'reactstrap';
import { Appointment } from '../../models/appointment';
import { Status } from '../../models/appointmentstatus';
import { updateAppointments, createPhysicalRecord } from '../../api/apidoctor';
import { LastRecord } from '../../models/lastRecord';


interface UpdateAppointmentModalProps {
    displayModal : boolean,
    toggleModal : () => void,
    appointment : Appointment,
    changeAppointments : () => void,
}

interface UpdateAppointmentModalState {
    status : string,
    details : string,
    age : number,
    weight : number,
    height : number,
    diagnosis : string,
    prescribedAction : string,
    prescribedMedication: string,
    notes : string,
}

export class UpdateAppointmentModal extends React.Component<UpdateAppointmentModalProps,UpdateAppointmentModalState>{
    constructor(props:UpdateAppointmentModalProps) {
        super(props)
        this.state = {
            status : "",
            details : "",
            age : 0,
            weight : 0,
            height : 0,
            diagnosis : "",
            prescribedAction : "",
            prescribedMedication : "",
            notes : ""
        }
    }

    setStatus = (event:any) => {
        this.setState({
            status : event.target.value
        })
    }

    setDetails = (event:any) => {
        this.setState({
            details : event.target.value
        })
    }

    setAge = (event:any) => {
        this.setState({
            age : event.target.value
        })
    }

    setWeight = (event:any) => {
        this.setState({
            weight : event.target.value
        })
    }

    setHeight = (event:any) => {
        this.setState({
            height : event.target.value
        })
    }

    setDiagnosis = (event:any) => {
        this.setState({
            diagnosis : event.target.value
        })
    }

    setPreAction = (event:any) => {
        this.setState({
            prescribedAction : event.target.value
        })
    }

    setPreMedication = (event:any) => {
        this.setState({
            prescribedMedication : event.target.value
        })
    }

    setNotes = (event:any) => {
        this.setState({
            notes : event.target.value
        })
    }

    modifyAppointments = async (event:any) => {
        event.preventDefault();
        let app : Appointment;
        let statusName : string = "";
        
        if(this.state.status === "2"){
            statusName = "checked in"
        }else if(this.state.status === "3"){
            statusName = "cancelled"
        }
        const status = new Status(+this.state.status,statusName)
        if(this.state.details){
            app = new Appointment(this.props.appointment.appointmentId,this.state.details,this.props.appointment.dateSlot,this.props.appointment.timeSlot,this.props.appointment.doctor,this.props.appointment.patient,status,this.props.appointment.type)
        }else{
            app = new Appointment(this.props.appointment.appointmentId,this.props.appointment.details,this.props.appointment.dateSlot,this.props.appointment.timeSlot,this.props.appointment.doctor,this.props.appointment.patient,status,this.props.appointment.type)
        }
        this.props.toggleModal();
        console.log(app)
        await updateAppointments(app);
        this.props.changeAppointments();
        if(this.state.diagnosis || this.state.height || this.state.notes || this.state.prescribedAction || this.state.prescribedMedication || this.state.weight || this.state.age){
            let record = new LastRecord(app.appointmentId,this.state.height,this.state.weight,this.state.age,this.state.diagnosis,this.state.prescribedAction,this.state.prescribedMedication,this.state.notes,app);
            console.log(record)
            await createPhysicalRecord(record);
        }
        

    }
    render() {
        return (
            <Modal isOpen={this.props.displayModal} toggle={this.props.toggleModal}>
                <Container>
                    <Form onSubmit={this.modifyAppointments}>
                        <FormGroup>
                            <Label>Appointment Status</Label>
                            <Input onChange={this.setStatus} value={this.state.status} type="select" required>
                                <option value="">Select</option>
                                <option value="2">Checked In</option>
                                <option value="3">Cancelled</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Details</Label>
                            <Input onChange={this.setDetails} value={this.state.details} type="textarea"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Age</Label>
                            <Input onChange={this.setAge} value={this.state.age} type="number"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Weight</Label>
                            <Input onChange={this.setWeight} value={this.state.weight} type="number"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Height</Label>
                            <Input onChange={this.setHeight} value={this.state.height} type="number"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Diagnosis</Label>
                            <Input onChange={this.setDiagnosis}  value={this.state.diagnosis} type="textarea"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Prescribed Action</Label>
                            <Input onChange={this.setPreAction} value={this.state.prescribedAction} type="textarea"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Prescribed Medication</Label>
                            <Input onChange={this.setPreMedication} value={this.state.prescribedMedication} type="textarea"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Notes</Label>
                            <Input onChange={this.setNotes} value={this.state.notes} type="textarea"/>
                        </FormGroup>
                        <ModalFooter>
                            <Button type="submit">Confirm</Button>
                            <Button onClick={this.props.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Container>
            </Modal>
        )
    }
}