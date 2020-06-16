import React from "react";
import { Container, Row, Card, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Appointment } from "../../models/appointment";
import { ChangeTimeSlotComponent } from "./changeTimeSlot";



interface IDisplayProps{

    appointments:any;
}


export class DisplayPatientAppointmentComponent extends React.Component<IDisplayProps,any>{

constructor(props:IDisplayProps){
    super(props);
    this.state={
        appoint:null
    }
}


componentDidMount=()=>{
    console.log(this.props.appointments)
    this.setState({
        appoint:this.props.appointments

    })
}



    render(){
console.log(this.state.appoint);
      if(this.state.appoint){
return(
      this.state.appoint.map((elem:Appointment)=>{


        return(
        <div key={elem.appointmentId}>
          <Card>
              <CardBody>

<ListGroup>
<ListGroupItem>
    Appointment Id: {elem.appointmentId}
</ListGroupItem>
<ListGroupItem>
    Details: {elem.details}
</ListGroupItem>
<ListGroupItem>
    Date: {elem.dateSlot}
</ListGroupItem>
<ListGroupItem>
    Time: <ChangeTimeSlotComponent timeSlot={elem.timeSlot}/>
</ListGroupItem>
<ListGroupItem>
Doctor: {elem.doctor.firstName} {elem.doctor.lastName}
</ListGroupItem>
<ListGroupItem>
Status: {elem.status.statusName}
</ListGroupItem>
<ListGroupItem>
Type: {elem.type.typeName}
</ListGroupItem>


</ListGroup>


              </CardBody>
              
              
              
              
              </Card>  



        </div>
        )


      })

)

      }else{
          return(
              <p>none</p>
          )
      }



    
    }
}