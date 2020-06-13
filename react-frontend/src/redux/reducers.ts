import { Patient } from "../models/patient";
import { Doctor } from "../models/doctor";
import { Department } from "../models/department";
import { AnyAction, combineReducers } from "redux";
import { loginTypes } from "./action-mappers";
import { LastRecord } from "../models/lastRecord";

interface IUser{
    patient:Patient,
    doctor:Doctor
}


const defaultUser:IUser={
    patient:new Patient(0,"","","","","",0,"","",""),
    doctor:new Doctor(0,"","","","","",new Department(0,""))

}







export const loginReducer=(state:IUser=defaultUser,action:AnyAction)=>{
    switch(action.type){

        case loginTypes.LOGIN_PATIENT:{
            
            const patient=action.playload.patient;
            return{
                ...state,
                patient:patient
            }


        }

        case loginTypes.LOGIN_DOCTOR:{
            const doctor=action.playload.doctor;
            return {
                ...state,
                doctor:doctor
            }

        }

        default:
            return state



    }



}


export interface IState{
    loginUser:IUser
}

export const state=combineReducers<IState>({
    loginUser:loginReducer

})

