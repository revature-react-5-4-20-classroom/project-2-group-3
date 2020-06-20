import { Patient } from "../models/patient"
import { Doctor } from "../models/doctor"






export const loginTypes={
    LOGIN_PATIENT:"REACT_LOGIN_PATIENT",
    LOGIN_DOCTOR:"REACT_LOGIN_DOCTOR"

}



export const loginSavePatient=(patient:Patient)=>{

    return{

type:loginTypes.LOGIN_PATIENT,
playload:{
    patient
}

    }

}

export const loginSaveDoctor=(doctor:Doctor)=>{

    return{

type:loginTypes.LOGIN_DOCTOR,
playload:{
    doctor
}

    }

}






