import { LastRecord } from "./lastRecord";



export interface IPatient {

patientId:number,
firstName:string,
lastName:string,
gender:string,
username:string,
password:string,
birthDate:number,
address:string,
phone:string,
email:string,

lastRecord?:LastRecord




}


export class Patient implements IPatient{
    patientId: number;
    firstName: string;
    lastName: string;
    gender: string;
    username: string;
    password: string;
    birthDate: number;
    address: string;
    phone: string;
    email: string;
    lastRecord?:LastRecord

    constructor(patientId:number,firstName:string,lastName:string,gender:string,username:string,password:string,birthDate:number,address:string,phone:string,email:string,lastRecord?:LastRecord){

this.patientId=patientId;
this.firstName=firstName;
this.lastName=lastName;
this.gender=gender;
this.username=username;
this.password=password;
this.birthDate=birthDate;
this.address=address;
this.phone=phone;
this.email=email;
this.lastRecord=lastRecord;


        
    }







}