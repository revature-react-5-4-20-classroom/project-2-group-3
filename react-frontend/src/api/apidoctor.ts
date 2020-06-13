import { loginSaveDoctor } from "../redux/action-mappers";
import { store } from "../redux/store";
import { project2 } from "./apipatient";
import { Doctor } from "../models/doctor";


export let x=5;


export const loginDoctor=async(un:string,pas:string)=>{
    try{
        let response=await project2.post("/doctors/login",{username:un,password:pas});
        const{doctorId,firstName,lastName,speciality,username,password,department}=response.data;

        let doctor=new Doctor(doctorId,firstName,lastName,speciality,username,password,department);
        store.dispatch(loginSaveDoctor(doctor));
        return response;
        }
        catch(e){
            throw e;
        }





}