import { loginSaveDoctor, loginSavePatient } from "../redux/action-mappers";
import { store } from "../redux/store";
import { project2 } from "./apipatient";
import { Doctor } from "../models/doctor";
import { Patient } from "../models/patient";
import { Status } from "../models/appointmentstatus";
import { Type } from "../models/appointmentType";
import { Appointment } from "../models/appointment";
import { Department } from "../models/department";
import { LastRecord } from "../models/lastRecord";

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

export const getAppointments = async(id:number) : Promise<Appointment[]>=> {
    try{
        let response = await project2.get(`/doctors/${id}/appointments`);
        return response.data.map((app:any) => {
            const status : Status = new Status(app.status.statusId,app.status.statusName);
            const type : Type = new Type(app.type.typeId,app.type.typeName);
            const department : Department = new Department(app.doctor.department.id,app.doctor.department.departmentName);
            const doctor : Doctor = new Doctor(app.doctor.doctorId,app.doctor.firstName,app.doctor.lastName,app.doctor.speciality,app.doctor.username,app.doctor.password,department);
            let patient : Patient;
            if(app.patient.lastRecord){ 
                const lastRecord : LastRecord = new LastRecord(app.patient.lastRecord.appointmentId,app.patient.lastRecord.height,app.patient.lastRecord.weight,app.patient.lastRecord.age,app.patient.lastRecord.diagnosis,app.patient.lastRecord.prescribedAction,app.patient.lastRecord.prescribedMedication,app.patient.lastRecord.notes);
                patient = new Patient(app.patient.patientId,app.patient.firstName,app.patient.lastName,app.patient.gender,app.patient.username,app.patient.password,app.patient.birthDate,app.patient.address,app.patient.phone,app.patient.email,lastRecord)
            }else{
                patient = new Patient(app.patient.patientId,app.patient.firstName,app.patient.lastName,app.patient.gender,app.patient.username,app.patient.password,app.patient.birthDate,app.patient.address,app.patient.phone,app.patient.email)
            }
            return new Appointment(app.appointmentId,app.details,app.dateSlot,app.timeSlot,doctor,patient,status,type);
        })
    }catch(e) {
        throw e;
    }
}

export const updateAppointments = async(appointment:Appointment) : Promise<void> => {
    try{
        let response = await project2.post(`/appointments/${appointment.appointmentId}`,appointment)
    }catch(e){
        throw e;
    }
}

export const createPhysicalRecord = async(lastRecord:LastRecord) : Promise<void> => {
    try{
        let response = await project2.post(`/physicals`,lastRecord)
    }catch(e){
        throw e;
    }
}

export const getPatients = async () : Promise<Patient[]> => {
    try{
        let response = await project2.get("/patients");
        return response.data.map( (patient:any) => {
            let newPatient: Patient;
            if(patient.lastRecord){ 
                const lastRecord : LastRecord = new LastRecord(patient.lastRecord.appointmentId,patient.lastRecord.height,patient.lastRecord.weight,patient.lastRecord.age,patient.lastRecord.diagnosis,patient.lastRecord.prescribedAction,patient.lastRecord.prescribedMedication,patient.lastRecord.notes);
                newPatient = new Patient(patient.patientId,patient.firstName,patient.lastName,patient.gender,patient.username,patient.password,patient.birthDate,patient.address,patient.phone,patient.email,lastRecord)
            }else{
                newPatient = new Patient(patient.patientId,patient.firstName,patient.lastName,patient.gender,patient.username,patient.password,patient.birthDate,patient.address,patient.phone,patient.email)
            }
            return newPatient;
        })
    }catch(e){
        throw e;
    }
}

export const updatePhysicalRecord = async (lastRecord:LastRecord|undefined) : Promise<void> => {
    try{
        if(lastRecord){
            let response = await project2.post(`/physicals/${lastRecord.appointmentId}`,lastRecord)
        }
    }catch(e){
        throw e;
    }
}

export const createAppointment = async (appointment:Appointment) => {
    try{
        let response = await project2.post("/appointments",appointment)
    }catch(e){
        throw e;
    }
}