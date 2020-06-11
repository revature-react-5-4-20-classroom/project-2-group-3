import React from 'react';
import { Button, Container, Row, Col } from "reactstrap";

import { withRouter } from 'react-router-dom'


export class PatientLoginComponent extends React.Component<any,any>{

constructor(props:any){
    super(props);
    this.state={
        username:"joel",
        password:"1234"
    }

}


verifyUser=async(event:any)=>{
    event.preventDefault();
    //make conditions later
    this.props.history.push("/patient/home");


}

setUsername=()=>{

}

setPassword=()=>{

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

export const PatientLoginComponentR=withRouter(PatientLoginComponent);