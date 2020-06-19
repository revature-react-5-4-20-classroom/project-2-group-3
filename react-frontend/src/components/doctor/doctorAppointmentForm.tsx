import React from 'react';
import { Status } from '../../models/appointmentstatus';
import { Type } from '../../models/appointmentType';
import { Modal, Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Appointment } from '../../models/appointment';
import { createAppointment } from '../../api/apidoctor';

interface IProps{
    onDisplay:any,
    changeModal:any,
    doctor1:any,
    timeslot:number,
    dateslot:any,
    patient?:any,
    history?:any
    
}


interface IModalState{
details:any,
type:any,
time:any


}
export class DoctorAppointmentForm extends React.Component<IProps,IModalState>{

constructor(props:any){
    super(props)
    this.state={
        details:"",
        type:1,
        time:null
    }
}

componentDidMount=()=>{
    if(this.props.timeslot){
        this.setState({
            time:this.props.timeslot
        })
    }

}

componentDidUpdate=(prevProps:any)=>{
    
    if(prevProps.timeslot!==this.props.timeslot){
        this.setState({
            time:this.props.timeslot
        })
    }

}

changeModal=()=>{
    this.props.changeModal();
}

onChangesDetails=(e:any)=>{
 
    let value = e.target.value;
    this.setState({
        details:value
    })

}

onChangesType=(e:any)=>{
 
    let value = e.target.value;
    this.setState({
        type:value
    })

}

onSubmits=async(event:any)=>{
    event.preventDefault();
    let details=this.state.details;
    
    let dateSlot=this.props.dateslot;
    //console.log(dateSlot);
    let timeSlot=this.props.timeslot;
    let doctor=this.props.doctor1;
    let patient=this.props.patient;
    let status=new Status(1,"scheduled");
    let typename=this.changeType();
    let type=new Type(this.state.type,typename);
    let app : Appointment = new Appointment(0,details,dateSlot,timeSlot,doctor,patient,status,type)
    try{
        let response=await createAppointment(app);
    //console.log(response);
    //this.props.history.push("/patient/appointments");
    }catch(e){
    console.log(e);
    }
    this.changeModal();
    // this.props.history.push("/patient/appointments");
    
}
    
changeType=():string=>{
    let typeInt=this.state.type;
    let typename="";
    switch(typeInt){
        case 1:
            typename="routine visit"
            break;
            case 2:
                typename="office visit"
                break;
                case 3:
                    typename="return visit"
                    break;
                    default:
                        break;
    }
    return typename;

}


render(){
    if(this.state.time){
        return(
            <Modal isOpen={this.props.onDisplay}  >
<Container>
<Form onSubmit={this.onSubmits}>
<FormGroup>
<Label>Details</Label>
<Input type="text" name="details" value={this.state.details} onChange={this.onChangesDetails} required />

</FormGroup>
<FormGroup>
<Label>Date:</Label>
<Input type="text" value={this.props.dateslot||""} disabled/>
</FormGroup>
<FormGroup>
<Label>TimeSlot:</Label>
{this.props.timeslot}
</FormGroup>
<FormGroup>
<Label>Type:</Label>  
<Input type="select" value={this.state.type} onChange={this.onChangesType} required>
<option value="1">Routine Visit</option>
<option value="2">Office Visit</option>
<option value="3">Return Visit</option>
</Input>
</FormGroup>
<Button type="submit">Confirm</Button>
<Button onClick={this.changeModal} className="mt-1 mb-1 ml-1">Cancel</Button>  




</Form>

 
  </Container>
</Modal>




        
        )
    }
    else{
        return(
            <p></p>
        )
    }




    }
}