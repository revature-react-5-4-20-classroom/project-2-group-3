import { Department } from "./department";




export interface IDoctor{

doctorId:number,
firstName:string,
lastName:string,
speciality:string,
username:string,
password:string,
department:Department

}


export class Doctor implements IDoctor{

    doctorId:number;
    firstName:string;
lastName:string;
speciality:string;
username:string;
password:string;
department:Department;





constructor(doctorId:number,firstName:string,lastName:string,speciality:string,username:string,password:string,department:Department){
    this.doctorId=doctorId;
    this.firstName=firstName;
    this.lastName=lastName;
    this.speciality=speciality;
    this.username=username;
    this.password=password;
    this.department=department;


}







}