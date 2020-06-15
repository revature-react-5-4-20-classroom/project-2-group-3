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
    baseURL: 'http://localhost:8080/',

    // baseURL: "localhost:8080/",
    // If you don't have the following line, your login won't work!
    // withCredentials: true,
});



//login patient
export const loginpatient=async(un:string,pas:string)=>{
try{
let response=await project2.post("/patients/login",{username:un,password:pas});
const{patientId,lastRecord,firstName,lastName,gender,username,password,birthDate,address,phone,email}=response.data;
let patient=new Patient(patientId,firstName,lastName,gender,username,password,birthDate,address,phone,email,lastRecord);
store.dispatch(loginSavePatient(patient));
store.dispatch(loginSaveDoctor(new Doctor(0,"","","","","",new Department(0,""))));
return response;
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

export const departmentDoctors=async(id:number)=>{

    try{

        let doctors=await project2.get(`departments/${id}/doctors`);
        return doctors.data;

    }catch(e){
        throw e;
    }

}

export const saveAppointment=async(det:string,dateS:Date,timeS:number,doct:Doctor,pat:Patient,stat:Status,ty:Type)=>{
    try{
        console.log(dateS);

let id=0;
let appointment=await project2.post("/appointments",{id,details:det,dateSlot:dateS,timeSlot:timeS,doctor:doct,patient:pat,status:stat,type:ty});
return appointment.data;
    }catch(e){
        throw e;
    }
}