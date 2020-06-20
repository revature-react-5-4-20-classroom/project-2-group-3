import { Appointment } from "./appointment";




export interface ILastRecord{
appointmentId:number,
height:number,
weight:number,
age:number;
diagnosis:string,
prescribedAction:string,
prescribedMedication:string,
notes:string,
appointment? : Appointment




}


export class LastRecord implements ILastRecord{
    appointmentId: number;
    height: number;
    weight: number;
    age: number;
    diagnosis: string;
    prescribedAction: string;
    prescribedMedication: string;
    notes: string;
    appointment? : Appointment

constructor(phsicalRecordId:number,height:number,weight:number,age:number,diagnosis:string,prescribedAction:string,prescribedMedication:string,notes:string,appointment?:Appointment){

    this.appointmentId=phsicalRecordId;
    this.height=height;
    this.weight=weight;
    this.age=age;
    this.diagnosis=diagnosis;
    this.prescribedAction=prescribedAction
    this.prescribedMedication=prescribedMedication
    this.notes=notes;
    this.appointment=appointment;

}




}