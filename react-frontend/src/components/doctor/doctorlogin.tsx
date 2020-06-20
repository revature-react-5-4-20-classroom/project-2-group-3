import React from 'react';
import { Button, Container, Row, Col } from "reactstrap";

import { withRouter } from 'react-router-dom'
import { loginDoctor } from '../../api/apidoctor';
import { toast } from 'react-toastify';


export class DoctorLoginComponent extends React.Component<any,any>{

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
let doctor =await loginDoctor(this.state.username,this.state.password);
//console.log(doctor);
this.props.history.push("/doctor/home");


    }catch(e){
        toast("invalid credentials", { type: "error" });
       
        console.log(e);

    }
    // this.props.history.push("/doctor/home");


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
                <h2 > Please Sign In</h2>
                <br/>
                <div className="form-group">
                    <label><span className="font-weight-bold">UserName:</span><input type="text" className="form-control" value={this.state.username} onChange={this.setUsername} required /></label>
                </div>
                <div className="form-group">
                    <label><span className="font-weight-bold">Password:</span><input type="password" className="form-control" value={this.state.password} onChange={this.setPassword} required /></label>
                </div>
                {/* <button className="btn btn-primary" type="submit">Login</button> */}
                <Button color="primary" className="btn-block">Login</Button>
            </form>
            </div>
            </div>






        )
    }




}

export const DoctorLoginComponentR=withRouter(DoctorLoginComponent);