

import React from "react";
import { Container, Row, Col, Form, Label, FormGroup, Input, Button } from "reactstrap";
import { Patient } from "../../models/patient";
import { createPatient } from '../../api/apipatient';
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

interface Icreate{

    firstName:string;
    lastName:string;
    gender:string;
    username:string;
    password:string;
    birthDate:any;
    address:string;
    phone:string;
    email:string;

}



export class CreateAccountComponent extends React.Component<any,Icreate>{


constructor(props:any){
    super(props);
    this.state={
        firstName:"",
    lastName:"",
    gender:"",
    username:"",
    password:"",
    birthDate:"",
    address:"",
    phone:"",
    email:""
        


    }
}


    onfirstSubmits=(event:any)=>{
        let firstName=event.target.value;
        this.setState({
            firstName:firstName
        })
        
    }

    onlastSumbits=(event:any)=>{
        let x=event.target.value;
        this.setState({
            lastName:x
        })
        }

        ongenderSubmits=(event:any)=>{ let x=event.target.value; this.setState({ gender:x }) }
        onusernameSubmits=(event:any)=>{ let x=event.target.value; this.setState({ username:x }) }
        onpasswordSubmits=(event:any)=>{ let x=event.target.value;console.log(x); this.setState({ password:x }) }
        ondateSubmits=(event:any)=>{ let x=event.target.value; console.log(x); this.setState({ birthDate:x }) }
        onaddSubmits=(event:any)=>{ let x=event.target.value; this.setState({ address:x }) }
        onphoneSubmits=(event:any)=>{ let x=event.target.value; this.setState({ phone:x }) }
        onemailSubmits=(event:any)=>{ let x=event.target.value; this.setState({ email:x }) }

        FormOnSUbmit=async(event:any)=>{
            event.preventDefault();
            try{

                
                       let response=await createPatient(this.state.firstName,this.state.lastName,this.state.gender,this.state.username,this.state.password
                        ,this.state.birthDate,this.state.address,this.state.phone,this.state.email);
                        toast("success", { type: "success" });
                       this.props.history.push("/patientlogin")

            }catch(e){

console.log(e);

            }

        }


    render(){


return(

<Container fluid  id="create">
    <Row  >
        <Col sm="5" >
<div className="h-10 w-70" style={{ height: "60%" }}>
    <h2 className=" text-center mt-1" >Please enter all the details</h2>
                               <Form onSubmit={this.FormOnSUbmit}>
                                <FormGroup>
                                    <Label for="userId">First Name  </Label>
                                    <Input type="text"  value={this.state.firstName} onChange={this.onfirstSubmits} required/>

                                </FormGroup>
                                <FormGroup>
                                    <Label>last Name  </Label>
                                    <Input type="text" value={this.state.lastName} onChange={this.onlastSumbits} required />

                                </FormGroup>
                                <FormGroup>
                                    <Label>Gender   </Label>
                                    <Input type="text"  onChange={this.ongenderSubmits} value={this.state.gender} required />

                                </FormGroup>
                                <FormGroup>
                                    <Label>username </Label>
                                    <Input type="text"  onChange={this.onusernameSubmits} value={this.state.username} required />

                                </FormGroup>
                                <FormGroup>
                                    <Label>password  </Label>
                                    <Input type="text"  onChange={this.onpasswordSubmits} value={this.state.password} required />

                                </FormGroup>
                                <FormGroup>
                                    <Label>Birth Date:  </Label>
                                    <Input type="date"  value={this.state.birthDate} onChange={this.ondateSubmits} />

                                </FormGroup>
                                <FormGroup>
                                    <Label>Email </Label>
                                    <Input type="text"  value={this.state.email} onChange={this.onemailSubmits} />

                                </FormGroup>
                                <FormGroup>
                                    <Label>Address </Label>
                                    <Input type="text"  value={this.state.address} onChange={this.onaddSubmits} />

                                </FormGroup>
                                <FormGroup>
                                    <Label>Phone: </Label>
                                    <Input type="text"  value={this.state.phone} onChange={this.onphoneSubmits} />

                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" color="primary">Submit</Button>
                                </FormGroup>
                            </Form>
                            </div>
        
        
        
        
        </Col>
    </Row>
</Container>

)

    }










}

export let CreateAccountComponentW=withRouter(CreateAccountComponent);