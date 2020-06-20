import { Department } from "./department";
import { Appointment } from "./appointment";




export interface IDoctor{

doctorId:number,
firstName:string,
lastName:string,
speciality:string,
username:string,
password:string,
department:Department,
appointments?:Appointment[]

}


export class Doctor implements IDoctor{

    doctorId:number;
    firstName:string;
lastName:string;
speciality:string;
username:string;
password:string;
department:Department;
appointments?:Appointment[]





constructor(doctorId:number,firstName:string,lastName:string,speciality:string,username:string,password:string,department:Department,appointments?:Appointment[]){
    this.doctorId=doctorId;
    this.firstName=firstName;
    this.lastName=lastName;
    this.speciality=speciality;
    this.username=username;
    this.password=password;
    this.department=department;
    this.appointments=appointments


}







}