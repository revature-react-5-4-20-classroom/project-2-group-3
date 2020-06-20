
import React from "react";
import { patientAllAppointment } from "../../api/apipatient";
import { IState } from "../../redux/reducers";
import { connect } from "react-redux";
import { Container, Row, Col, Card, ListGroup, ListGroupItem, CardBody } from "reactstrap";
import { DisplayPatientAppointmentComponent } from "./displaypatientAppointment";
import { Appointment } from "../../models/appointment";
import { ChangeTimeSlotComponent } from "./changeTimeSlot";


interface IPatientAppState{
    appointment:any
}


export class PatientAppointmentComponent extends React.Component<any,IPatientAppState>{


    constructor(props:any){
        super(props);
        this.state={
            appointment:null
        }
    }


componentDidMount=async ()=>{
try{
   console.log(this.props.patient.patientId)
    let id=this.props.patient.patientId;
    let appointments=await patientAllAppointment(id);
   if(appointments){

let statusappointment=appointments.filter((elem:Appointment)=>{return elem.status.statusId==1})

    console.log(appointments);
    this.setState({
        appointment:statusappointment,
    });
   } 
   

}catch(e){
    console.log(e);

}


}


    render(){
if(this.state.appointment){
    return(










 <>
   <Container>
       <Row>
<Col>
<DisplayPatientAppointmentComponent appointments={this.state.appointment}/>


</Col>



       </Row>
       
       
       </Container>   
      
      
         </> )}
    
        
        
    //         )})    
    // )}
            if(!this.state.appointment){
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
// loginSavePatient,
// loginSaveDoctor

  
  
  }
  
  
  export let  PatientAppointmentComponentW = connect(mapStateToProps, mapDispatchToProps)( PatientAppointmentComponent);