import React from "react";
import { Doctor } from "../../models/doctor";
import { Appointment } from "../../models/appointment";
import { Table, Button, Modal, Form } from "reactstrap";
import { ChangeTimeSlotComponent } from "./changeTimeSlot";
import { AppointmentModalComponent, AppointmentModalComponentS } from "./appointmentForm";




interface IMakeState{
   tomorrow:any,
   dayAfterT:any,
   tomorrowDate:any,
   dayAfterDate:any,
   modal:boolean,
   timeslot:any,
   dateslot:any

}

interface  IMakeProp{
    doctor:Doctor;

}






export class MakeNewAppointmentComponent extends React.Component<IMakeProp,IMakeState>{
constructor(props:IMakeProp){
    super(props);
    this.state={
        tomorrow:null,
        dayAfterT:null,
        tomorrowDate:null,
        dayAfterDate:null,
        modal:false,
        timeslot:null,
         dateslot:null

    }
}

componentDidMount=()=>{
    this.makeApointments();
}


makeApointments=()=>{
    let tomorrowO:any=[1,2,3,4,5,6,7,8,9,10];
    let dayAfterTO:any=[1,2,3,4,5,6,7,8,9,10];
let tomorrow1=new Date();
tomorrow1.setDate(new Date().getDate()+1);
let tomorrow=tomorrow1.toISOString().slice(0,10);
let dayafterT1=new Date();
dayafterT1.setDate(new Date().getDate()+2);
let dayafterT=dayafterT1.toISOString().slice(0,10);
console.log(tomorrow);
console.log(dayafterT);


let appointments:any[]|undefined=this.props.doctor.appointments;
let today=new Date().toISOString().slice(0,10);
console.log(today);

if(appointments){
  let newappoint=  appointments.map((appointment:Appointment)=>{


let stringDate=appointment.dateSlot.toString();

let parts=stringDate.split('-');

let dates1=new Date(Number(parts[0]),Number(parts[1])-1,Number(parts[2]));
// console.log(dates1.toISOString().slice(0,10));

let appointdate=dates1.toISOString().slice(0,10);
console.log(appointdate);
console.log(appointdate===today);
let OnTimeSlot=appointment.timeSlot;
console.log(appointdate>today);
if(appointdate>today){
  
    if(appointdate===tomorrow){
       tomorrowO=[];
        for(let i=1;i<=10;i++){
if(i==OnTimeSlot){
    continue;
}
tomorrowO.push(i);


        }


    }

    
    if(appointdate===dayafterT){
        dayAfterTO=[];

        for(let i=1;i<=10;i++){
            if(i==OnTimeSlot){
                continue
            }
            dayAfterTO.push(i);
            
            
                    }


    }
   





}

// tomorrowO.push(1);


    })

}

console.log(tomorrowO);
console.log(dayAfterTO);
this.setState({
    tomorrow:tomorrowO,
    dayAfterT:dayAfterTO,
    tomorrowDate:tomorrow,
    dayAfterDate:dayafterT
    

})

}



changeModal=(event:any)=>{
    this.setState({
        modal:!this.state.modal
    })
   
}

onClicks=(event:any)=>{
    let timeSlot=event.target.id; //integer
    let date=event.target.value;
    console.log(`date ${date}`);
    this.setState({
        timeslot:timeSlot,
        dateslot:date,
        modal:!this.state.modal
    })


}





    render(){
    

if(this.state.tomorrow&&this.state.dayAfterT){
    return(
        <>
        <Table>
<tbody>
<tr>
    <th>{this.state.tomorrowDate}</th>
    {this.state.tomorrow.map((slots:any)=>{

        return(
<td key={slots}>
    <Button id={slots} onClick={this.onClicks} value={this.state.tomorrowDate}><ChangeTimeSlotComponent timeSlot={slots}/></Button>


</td>
        )
    })}




</tr>
<tr>
    <th>{this.state.dayAfterDate}</th>
    {this.state.dayAfterT.map((slots:any)=>{

return(
<td key={slots}>
<Button id={slots} onClick={this.onClicks} value={this.state.dayAfterDate}><ChangeTimeSlotComponent timeSlot={slots}/></Button>


</td>
)
})}


    </tr>


</tbody>



        </Table>



 <AppointmentModalComponentS onDisplay={this.state.modal} changeModal={this.changeModal} doctor1={this.props.doctor} timeslot={this.state.timeslot} dateslot={this.state.dateslot} />





        </>
    )




}else{
    return(
        <p>Not</p>
    )
}
  
    }

}