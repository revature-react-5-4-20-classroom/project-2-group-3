


interface IDepartment{

id:number;
departmentName:string;





}


export class Department implements IDepartment{

id:number;
departmentName:string;


constructor(id:number,department:string){

    this.id=id;
    this.departmentName=department;

}


}