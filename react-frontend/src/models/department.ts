import { Doctor } from "./doctor";



interface IDepartment{

id:number;
departmentName:string;





}


export class Department implements IDepartment{

id:number;
departmentName:string;
doctor?:Doctor;


constructor(id:number,department:string,doctor?:Doctor){

    this.id=id;
    this.departmentName=department;
    this.doctor=doctor;

}


}