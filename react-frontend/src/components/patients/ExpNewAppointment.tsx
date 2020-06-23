import React from "react";
import { Doctor } from "../../models/doctor";
import { Appointment } from "../../models/appointment";
import { Table, Button, Modal, Form } from "reactstrap";
import { ChangeTimeSlotComponent } from "./changeTimeSlot";
import { AppointmentModalComponent, AppointmentModalComponentS } from "./appointmentForm";
import { times, timesexp } from "./times";




interface IMakeState {
    tomorrow: any,
    dayAfterT: any,
    tomorrowDate: any,
    dayAfterDate: any,
    modal: boolean,
    timeslot: any,
    dateslot: any,
    dayAfter3O:any,
    dayAfter3Date:any,
    allthedaysandslots:any

}

interface IMakeProp {
    doctor: Doctor;
    toggle:any;

}






export class  EXpNewAppointmentComponent extends React.Component<IMakeProp, IMakeState>{
    constructor(props: IMakeProp) {
        super(props);
        this.state = {
            tomorrow: null,
            dayAfterT: null,
            tomorrowDate: null,
            dayAfterDate: null,
            modal: false,
            timeslot: null,
            dateslot: null,
            dayAfter3O:null,
             dayAfter3Date:null,
             allthedaysandslots:null

        }
    }

    componentDidMount = () => {
        this.makeApointments();
    }


    makeApointments = () => {
       
        let date1 = new Date();
        console.log(date1.getUTCDay());
        let dateutc = Date.UTC(date1.getUTCFullYear(), date1.getUTCMonth(), date1.getUTCDate(),
        date1.getUTCHours(), date1.getUTCMinutes(), date1.getUTCSeconds());
        let today1=new Date(dateutc);
let today=today1.toISOString().slice(0,10);

 let dates:any[]=timesexp();

        let dateOBjArray:any[]=[];
        for(let i=0;i<dates.length;i++){
let obj={date:dates[i],
    slots:[1,2,3,4,5,6,7,8,9,10]


}
dateOBjArray.push(obj);

        }
console.log(dateOBjArray);
console.log("hello")
      
     

        let appointments: any[] | undefined = this.props.doctor.appointments;



        if (appointments) {
             appointments.map((appointment: Appointment) => {

 let stringDate = appointment.dateSlot.toString();

                let parts = stringDate.split('-');
                //already stored in utc
                let dates1 = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
               

                let appointdate = dates1.toISOString().slice(0, 10);
             console.log("appointdate"+appointdate);
                let OnTimeSlot = appointment.timeSlot;
               
                if (appointdate > today) {

               let datesfilter=dateOBjArray.filter((dateObject)=>{

                if(dateObject.date===appointdate){

                   let newslots= dateObject.slots.filter((elem:any)=>{return elem!==OnTimeSlot})
                     dateObject.slots=newslots;

                    

                     }



               })  




                }

             } )}

             console.log(dateOBjArray);
             this.setState({
                 allthedaysandslots:dateOBjArray
             })
            

            }

        

                   
         



    changeModal = (event: any) => {
        this.setState({
            modal: !this.state.modal
        })
        this.props.toggle();

    }

    onClicks = (event: any) => {
        let timeSlot = event.target.id; //integer
        let date = event.target.value;
     
        this.setState({
            timeslot: timeSlot,
            dateslot: date,
            modal: !this.state.modal
        })


    }



    // <Button id={slots} onClick={this.onClicks} value={this.state.dayAfterDate}><ChangeTimeSlotComponent timeSlot={slots} /></Button>

    render() {


if(this.state.allthedaysandslots){
let alldays=this.state.allthedaysandslots;
return(
<>
    <Table>
        {alldays.map((days:any)=>{
            let date=days.date;
            let slot=days.slots;
            console.log(slot);
            return(
<tr>
    <td>
       {date}
    </td>
   {slot.map((elem:any)=>{
return(
    <td>
        
    <Button id={elem} onClick={this.onClicks} value={date}><ChangeTimeSlotComponent timeSlot={elem} /></Button>
    
    </td>
)

   })}
</tr>

            )




        })}



    </Table>

   <AppointmentModalComponentS onDisplay={this.state.modal} changeModal={this.changeModal} doctor1={this.props.doctor} timeslot={this.state.timeslot} dateslot={this.state.dateslot} />  
</>


)


}else{
    return(
        <p>nope</p>
    )
}


}


}