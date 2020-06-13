import axios from 'axios';
import { store } from '../redux/store';
import { Patient } from '../models/patient';
import { loginSavePatient } from '../redux/action-mappers';


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
return response;
}
catch(e){
    throw e;
}

}

