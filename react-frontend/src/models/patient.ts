


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

    constructor(patientId:number,firstName:string,lastName:string,gender:string,username:string,password:string,birthDate:number,address:string,phone:string,email:string){

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


        
    }







}