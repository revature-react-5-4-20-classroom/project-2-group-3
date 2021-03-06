import axios from 'axios';
import { store } from '../redux/store';
import { Patient } from '../models/patient';
import { loginSavePatient, loginSaveDoctor } from '../redux/action-mappers';
import { Doctor } from '../models/doctor';
import { Department } from '../models/department';
import { Appointment } from '../models/appointment';
import { Status } from '../models/appointmentstatus';
import { Type } from '../models/appointmentType';


export const project2 = axios .create({
    baseURL: 'http://ec2-18-191-218-24.us-east-2.compute.amazonaws.com:1235/'

    // baseURL: "http://localhost:1235/",
    // If you don't have the following line, your login won't work!
    // withCredentials: true,
});



//login patient
export const loginpatient=async(un:string,pas:string):Promise<Patient>=>{
try{
    console.log("login")
let response=await project2.post("/patients/login",{username:un,password:pas});
console.log(response.data)
const{patientId,lastRecord,firstName,lastName,gender,username,password,birthDate,address,phone,email,arn}=response.data;
console.log(arn);
let patient=new Patient(patientId,firstName,lastName,gender,username,password,birthDate,address,phone,email,lastRecord,arn);
console.log(patient)
store.dispatch(loginSavePatient(patient));
store.dispatch(loginSaveDoctor(new Doctor(0,"","","","","",new Department(0,""))));
return patient;
}
catch(e){
    throw e;
}

}


//get all the appointmetns of a patient
export const patientAllAppointment=async(patientId:number):Promise<any>=>{
    try{

        let response=await project2.get(`appointments/patient/${patientId}`);
    if(response.data<1){
        throw new Error;

    }else{
        return response.data;
    }
    


    }catch(e){
        throw e;


    }




}

//get all the doctors of a department

export const departmentDoctors=async(id:number):Promise<any>=>{

    try{

        let doctors=await project2.get(`departments/${id}/doctors`);
        return doctors.data;

    }catch(e){
        throw e;
    }

}

export const saveAppointment=async(det:string,dateS:Date,timeS:number,doct:Doctor,pat:Patient,stat:Status,ty:Type):Promise<any>=>{
    try{
        console.log(dateS);

let id=0;
let appointment=await project2.post("/appointments",{id,details:det,dateSlot:dateS,timeSlot:timeS,doctor:doct,patient:pat,status:stat,type:ty});
return appointment.data;
    }catch(e){
        throw e;
    }
}


//create a new pateint

export const createPatient=async(firstN:string,lastN:String,gender:string,username:string,password:string,birthD:number,add:string,phone:string,email:string):Promise<any>=>{
try{
    let response=await project2.post("/patients",{patientId:0,physicalRecord:null,firstName:firstN,lastName:lastN,gender:gender,username:username,password:password,birthDate:birthD,
    address:add,phone:phone,email:email});
    console.log(response.data);

}catch(e){

    throw e;
}

}


//get the emergency record
export const getEmergency=async(id:number)=>{
    try{
        let response=await project2.get(`econtacts/patient/${id}`);
        return response.data;

    }catch(e){
        throw e
    }
}

//make a new econtact
export const saveEmergency=async(name:string,address:string,phone:string,relation:string,patientId:Patient)=>{
    try{
        console.log(patientId)
        let id=0;
        let response=await project2.post(`/econtacts`,{id,name,address,phone,relation,patientId});
        console.log(response)
        return response.data;

    }catch(e){
        throw e
    }
}


//new subcriber request
export const newPatientSub=async(patient:Patient):Promise<Patient>=>{
try{

    console.log(patient);
    let response=await project2.post("/patients/newSub",{patientId:patient.patientId,lastRecord:patient.lastRecord,firstName:patient.firstName,lastName:patient.lastName,
    gender:patient.gender,username:patient.username,password:patient.password,birthDate:patient.birthDate,address:patient.address,phone:patient.phone,
email:patient.email,topicArn:patient.arn});
console.log(response);
return response.data;




}catch(e){
console.log(e);
throw e;

}




}


export const newAlert=async(patient:Patient,body:string,subject:string)=>{
    try{
console.log(patient.arn);

        let pat={patientId:patient.patientId,lastRecord:patient.lastRecord,firstName:patient.firstName,lastName:patient.lastName,
            gender:patient.gender,username:patient.username,password:patient.password,birthDate:patient.birthDate,address:patient.address,phone:patient.phone,
        email:patient.email,arn:patient.arn};

        let resposne=await project2.post("/patients/newAlert",{patient:pat,message:body,subject:subject});
    }catch(e){
console.log(e)
    }

}

// function patienF=function(){





// }