
import React from "react";
import { Modal, Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { Doctor } from "../../models/doctor";
import { IState } from "../../redux/reducers";
import { loginSavePatient,loginSaveDoctor} from "../../redux/action-mappers";
import { connect } from "react-redux";
import { ChangeTimeSlotComponent } from "./changeTimeSlot";
import { Status } from "../../models/appointmentstatus";
import { Type } from "../../models/appointmentType";
import { saveAppointment } from "../../api/apipatient";
import { withRouter } from "react-router-dom";

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
type:any


}
export class AppointmentModalComponent extends React.Component<any,any>{

constructor(props:any){
    super(props)
    this.state={
        details:"",
        type:1
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
console.log(dateSlot);
let timeSlot=this.props.timeslot;
let doctor=this.props.doctor1;
let patient=this.props.patient;
let status=new Status(1,"scheduled");
let typename=this.changeType();
let type=new Type(this.state.type,typename);
try{
let response=await saveAppointment(details,dateSlot,timeSlot,doctor,patient,status,type);
console.log(response);
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
<Label>Time:</Label>
<Input value={this.props.timeslot||""} type="number" disabled/>
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
}


const mapStateToProps = (state: IState) => {
 
    return {
      ...state.loginUser
    }
  
  }
  
  const mapDispatchToProps = {
loginSavePatient,
loginSaveDoctor

  
  
  }
  
  export let  AppointmentModalComponentR=withRouter(AppointmentModalComponent);
  export let AppointmentModalComponentS = connect(mapStateToProps, mapDispatchToProps)(AppointmentModalComponentR);

