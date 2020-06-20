import React from 'react';
import { Button, Container, Row, Col } from "reactstrap";

import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import { loginpatient, newPatientSub, newAlert } from '../../api/apipatient';
import { Patient } from '../../models/patient';


export class PatientLoginComponent extends React.Component<any,any>{

constructor(props:any){
    super(props);
    this.state={
        username:"",
        password:""
    }

}


verifyUser=async(event:any)=>{
    event.preventDefault();
   
    try{
let patient:Patient =await loginpatient(this.state.username,this.state.password);
console.log(patient);
console.log(patient.arn);

// let res=await newAlert(patient,"hello","me for");

if(patient.arn===null||patient.arn===undefined){
    let response=await  newPatientSub(patient);
    console.log("hi")

}


this.props.history.push("/patient/home");


    }catch(e){
        toast("invalid credentials", { type: "error" });
        console.log(e);

    }


  


}

setUsername=(event:any)=>{
    let username = event.target.value;
    this.setState({
        username: username
    })



}

setPassword=(event:any)=>{
    let password = event.target.value;
    this.setState({
        password: password
    })

}




    render(){


        return(
            <div className="row align-items-center justify-content-center " style={{ height: "80%" }}  >
            <div className="login-column">
            <form onSubmit={this.verifyUser} className="form-signin " >
                <h2 > Please login in</h2>
                <br/>
                <div className="form-group">
                    <label><span className="font-weight-bold">UserName:</span><input type="text" className="form-control" value={this.state.username} onChange={this.setUsername} required /></label>
                </div>
                <div className="form-group">
                    <label><span className="font-weight-bold">Password:</span><input type="password" className="form-control" value={this.state.password} onChange={this.setPassword} required /></label>
                </div>
                {/* <button className="btn btn-primary" type="submit">Login</button> */}
                <Button color="primary" className="btn btn-primary">Login</Button>
            </form>
            </div>
            <ToastContainer/>
            </div>







        )
    }




}

export const PatientLoginComponentR=withRouter(PatientLoginComponent);