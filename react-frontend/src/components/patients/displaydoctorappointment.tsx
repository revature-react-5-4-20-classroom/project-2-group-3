

import React from "react";
import { Doctor } from "../../models/doctor";
import { Card, ListGroup, CardBody, ListGroupItem, Button, Collapse } from "reactstrap";
import { MakeNewAppointmentComponent } from "./makenewAppointment";

interface IDoctor{
doctor:Doctor
}




export class DisplayDoctorComponent extends React.Component<IDoctor,any>{

    constructor(props:any){
        super(props)

        this.state={
            isOpen:false
        }
    }

    toggle=()=>{
        let isOpen=this.state.isOpen
this.setState({
    isOpen:!isOpen
})

    }



    render(){


return(
    <div key={this.props.doctor.doctorId}>
    <Card>
        <CardBody>
<ListGroup>
<ListGroupItem>
Name: {this.props.doctor.firstName} {this.props.doctor.lastName}
</ListGroupItem>
<ListGroupItem>
Speciality: {this.props.doctor.speciality}
</ListGroupItem>



</ListGroup>



<Button className=" mt-1" onClick={this.toggle} >Make an Appointment</Button>

<Collapse isOpen={this.state.isOpen}>
<div>

<MakeNewAppointmentComponent doctor={this.props.doctor}/>



</div>



</Collapse>


        </CardBody>
       
        
        
        </Card> 




 </div>





)






    }







}