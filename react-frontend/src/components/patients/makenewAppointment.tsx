import React from "react";
import { Doctor } from "../../models/doctor";
import { Appointment } from "../../models/appointment";
import { Table, Button, Modal, Form } from "reactstrap";
import { ChangeTimeSlotComponent } from "./changeTimeSlot";
import { AppointmentModalComponent, AppointmentModalComponentS } from "./appointmentForm";




interface IMakeState {
    tomorrow: any,
    dayAfterT: any,
    tomorrowDate: any,
    dayAfterDate: any,
    modal: boolean,
    timeslot: any,
    dateslot: any,
    dayAfter3O:any,
    dayAfter3Date:any

}

interface IMakeProp {
    doctor: Doctor;

}






export class MakeNewAppointmentComponent extends React.Component<IMakeProp, IMakeState>{
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
             dayAfter3Date:null

        }
    }

    componentDidMount = () => {
        this.makeApointments();
    }


    makeApointments = () => {
        let tomorrowO: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let dayAfterTO: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let dayAfterT3O: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let date1 = new Date();

        let dateutc = Date.UTC(date1.getUTCFullYear(), date1.getUTCMonth(), date1.getUTCDate(),
            date1.getUTCHours(), date1.getUTCMinutes(), date1.getUTCSeconds());
        let tomorrow1 = new Date(dateutc);
        tomorrow1.setDate(new Date().getDate() + 1);

        let tomorrow = tomorrow1.toISOString().slice(0, 10);




        let dayafterT1 = new Date();

        dayafterT1 = new Date(dateutc);


        dayafterT1.setDate(new Date().getDate() + 2);
        let dayafterT = dayafterT1.toISOString().slice(0, 10);
///new 
let dayafterT31 = new Date();
dayafterT31= new Date(dateutc);


dayafterT31.setDate(new Date().getDate() + 3);
let dayafterT3 = dayafterT31.toISOString().slice(0, 10);

        
        console.log(tomorrow);
        console.log(dayafterT);
        console.log(dayafterT3)

        let today1 = new Date();

        today1 = new Date(dateutc);
        let today = today1.toISOString().slice(0, 10);

        console.log(today);

        let appointments: any[] | undefined = this.props.doctor.appointments;



        if (appointments) {
             appointments.map((appointment: Appointment) => {


                let stringDate = appointment.dateSlot.toString();

                let parts = stringDate.split('-');
                //already stored in utc
                let dates1 = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
               

                let appointdate = dates1.toISOString().slice(0, 10);
                console.log(appointdate);
                console.log(appointdate === today);
                let OnTimeSlot = appointment.timeSlot;
                console.log(appointdate > today);
                if (appointdate > today) {

                    if (appointdate === tomorrow) {


                        tomorrowO = tomorrowO.filter((elem: any) => {
                            return elem != OnTimeSlot;

                        })





                    }


                    if (appointdate === dayafterT) {
                        // dayAfterTO = [];


                        dayAfterTO = dayAfterTO.filter((elem: any) => {
                            return elem != OnTimeSlot;
                        })





                    }

                    if (appointdate === dayafterT3) {
                        // dayAfterTO = [];


                        dayAfterT3O= dayAfterT3O.filter((elem: any) => {
                            return elem != OnTimeSlot;
                        })





                    }







                }

return 0;

            })

        }

        console.log(tomorrowO);
        console.log(dayAfterTO);
        this.setState({
            tomorrow: tomorrowO,
            dayAfterT: dayAfterTO,
            tomorrowDate: tomorrow,
            dayAfterDate: dayafterT,

            dayAfter3O:dayAfterT3O,
            dayAfter3Date:dayafterT3


        })

    }



    changeModal = (event: any) => {
        this.setState({
            modal: !this.state.modal
        })

    }

    onClicks = (event: any) => {
        let timeSlot = event.target.id; //integer
        let date = event.target.value;
        console.log(`date ${date}`);
        this.setState({
            timeslot: timeSlot,
            dateslot: date,
            modal: !this.state.modal
        })


    }





    render() {


        if (this.state.tomorrow && this.state.dayAfterT) {
            return (
                <>
                    <Table>
                        <tbody>
                            <tr>
                                <th>{this.state.tomorrowDate}</th>
                                {this.state.tomorrow.map((slots: any) => {

                                    return (
                                        <td key={slots}>
                                            <Button id={slots} onClick={this.onClicks} value={this.state.tomorrowDate}><ChangeTimeSlotComponent timeSlot={slots} /></Button>


                                        </td>
                                    )
                                })}




                            </tr>
                            <tr>
                                <th>{this.state.dayAfterDate}</th>
                                {this.state.dayAfterT.map((slots: any) => {

                                    return (
                                        <td key={slots}>
                                            <Button id={slots} onClick={this.onClicks} value={this.state.dayAfterDate}><ChangeTimeSlotComponent timeSlot={slots} /></Button>


                                        </td>
                                    )
                                })}


                            </tr>

                            <tr>
                                <th>{this.state.dayAfter3Date}</th>
                                {this.state.dayAfter3O.map((slots: any) => {

                                    return (
                                        <td key={slots}>
                                            <Button id={slots} onClick={this.onClicks} value={this.state.dayAfter3Date}><ChangeTimeSlotComponent timeSlot={slots} /></Button>


                                        </td>
                                    )
                                })}


                            </tr>


                        </tbody>



                    </Table>



                    <AppointmentModalComponentS onDisplay={this.state.modal} changeModal={this.changeModal} doctor1={this.props.doctor} timeslot={this.state.timeslot} dateslot={this.state.dateslot} />





                </>
            )




        } else {
            return (
                <p>Not</p>
            )
        }

    }

}