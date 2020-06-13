import { Patient } from "./patient";





export class econtact {


name:string;
address:string;
phone:string;
relation:string;
patientId:Patient;
constructor(name:string,address:string,phone:string,relation:string,patientId:Patient)
{
this.name=name;
this.address=address;
this.phone=phone;
this.relation=relation;
this.patientId=patientId;


}


}