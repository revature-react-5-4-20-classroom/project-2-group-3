import { loginSaveDoctor, loginSavePatient } from "../redux/action-mappers";
import { store } from "../redux/store";
import { project2 } from "./apipatient";
import { Doctor } from "../models/doctor";
import { Patient } from "../models/patient";


export let x=5;


export const loginDoctor=async(un:string,pas:string)=>{
    try{
        let response=await project2.post("/doctors/login",{username:un,password:pas});
        const{doctorId,firstName,lastName,speciality,username,password,department}=response.data;

        let doctor=new Doctor(doctorId,firstName,lastName,speciality,username,password,department);
        store.dispatch(loginSaveDoctor(doctor));
        store.dispatch(loginSavePatient(new  Patient(0,"","","","","",0,"","","")));
        return response;
        }
        catch(e){
            throw e;
        }





}