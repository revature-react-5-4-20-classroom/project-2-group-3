



export interface ILastRecord{
physicalRecordId:number,
height:number,
weight:number,
age:number;
diagnosis:string,
prescribedAction:string,
prescribedMedication:string,
notes:string,





}


export class LastRecord implements ILastRecord{
    physicalRecordId: number;
    height: number;
    weight: number;
    age: number;
    diagnosis: string;
    prescribedAction: string;
    prescribedMedication: string;
    notes: string;

constructor(phsicalRecordId:number,height:number,weight:number,age:number,diagnosis:string,prescribedAction:string,prescribedMedication:string,notes:string){

    this.physicalRecordId=phsicalRecordId;
    this.height=height;
    this.weight=weight;
    this.age=age;
    this.diagnosis=diagnosis;
    this.prescribedAction=prescribedAction
    this.prescribedMedication=prescribedMedication
    this.notes=notes;


}




}