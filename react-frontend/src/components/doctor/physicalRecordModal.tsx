import React from 'react';
import { Modal, Container, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap';
import { LastRecord } from '../../models/lastRecord';
import { updatePhysicalRecord } from '../../api/apidoctor';

interface PhysicalRecordModalProps {
    isOpen : boolean;
    lastRecord : any ;
    toggleModal : () => void;
}

interface PhysicalRecordModalState{
    age : string;
    height : string;
    weight : string;
    diagnosis : string;
    prescribedAction : string;
    prescribedMedication : string;
    notes : string;
}
export class PhysicalRecordModal extends React.Component<PhysicalRecordModalProps,PhysicalRecordModalState> {
    constructor(props:PhysicalRecordModalProps){
        super(props);
        this.state = {
            age : "",
            height : "",
            weight : "",
            diagnosis : "",
            prescribedAction : "",
            prescribedMedication : "",
            notes : "",
        }
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

    modifyPhysicalRecord = async (event:any) => {
        event.preventDefault();
        let updatedLastrecord = this.props.lastRecord
        if(this.state.age){
            updatedLastrecord.age = Number(this.state.age);
        }
        if(this.state.weight){
            updatedLastrecord.weight = Number(this.state.weight);
        }
        if(this.state.height){
            updatedLastrecord.height = Number(this.state.height);
        }
        if(this.state.diagnosis){
            updatedLastrecord.diagnosis = this.state.diagnosis;
        }
        if(this.state.prescribedAction){
            updatedLastrecord.prescribedAction = this.state.prescribedAction;
        }
        if(this.state.prescribedMedication){
            updatedLastrecord.prescribedMedication = this.state.prescribedMedication;
        }
        if(this.state.notes){
            updatedLastrecord.notes = this.state.notes;
        }
        await updatePhysicalRecord(updatedLastrecord)
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModal}>
                <Container>
                    <Form onSubmit={this.modifyPhysicalRecord}>
                    <FormGroup>
                            <Label>Age</Label>
                            <Input onChange={this.setAge} value={this.state.age} type="number" placeholder={this.props.lastRecord.age.toString()}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Weight</Label>
                            <Input onChange={this.setWeight} value={this.state.weight} type="number" placeholder={this.props.lastRecord.weight.toString()}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Height</Label>
                            <Input onChange={this.setHeight} value={this.state.height} type="number" placeholder={this.props.lastRecord.height.toString()}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Diagnosis</Label>
                            <Input onChange={this.setDiagnosis}  value={this.state.diagnosis} type="textarea" placeholder={this.props.lastRecord.diagnosis}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Prescribed Action</Label>
                            <Input onChange={this.setPreAction} value={this.state.prescribedAction} type="textarea" placeholder={this.props.lastRecord.prescribedAction}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Prescribed Medication</Label>
                            <Input onChange={this.setPreMedication} value={this.state.prescribedMedication} type="textarea" placeholder={this.props.lastRecord.prescribedMedication}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Notes</Label>
                            <Input onChange={this.setNotes} value={this.state.notes} type="textarea" placeholder={this.props.lastRecord.notes}/>
                        </FormGroup>
                        <ModalFooter>
                            <Button type="submit">Update</Button>
                            <Button onClick={this.props.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Container>
            </Modal>
        )
    }
}