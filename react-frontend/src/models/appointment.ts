import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Status } from "./appointmentstatus";
import { Type } from "./appointmentType";




export class Appointment {

appointmentId:number;
details:string;
dateSlot:number;
timeSlot:number;
doctor:Doctor;
patient:Patient;
status:Status;
type:Type;

constructor(appointmentId:number,details:string,dateSlot:number,timeSlot:number,doctor:Doctor,patient:Patient,status:Status,type:Type)
{

this.appointmentId=appointmentId;
this.details=details;
this.dateSlot=dateSlot;
this.timeSlot=timeSlot;
this.doctor=doctor;
this.patient=patient;
this.status=status;
this.type=type;



}




}