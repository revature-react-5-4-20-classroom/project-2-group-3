
import React from "react";
import { departmentDoctors } from "../../api/apipatient";
import { Doctor } from "../../models/doctor";
import { Card, CardBody, ListGroup, ListGroupItem, Button, Modal, ModalBody, Collapse } from "reactstrap";
import { DisplayDoctorComponent } from "./displaydoctorappointment";
import { withRouter } from "react-router-dom";


interface IDepartment{
    doctors:Doctor[]|null;
}

export class DepartmentDoctorsComponent extends React.Component<any,IDepartment>{

constructor(props:any){
    super(props);
    this.state={
        doctors:null
    }
}

componentDidMount=async()=>{
let response=await this.changes();
}

changes=async()=>{
    
try{


    let doctors=await departmentDoctors(this.props.departmentid);
    console.log(doctors);
    this.setState({
        doctors:doctors
    })
 
 }catch(e){
     console.log(e)
 
 }

}

// componentWillReceiveProps=async()=>{
//   let response=await  this.changes();


// }

componentDidUpdate=(prevProps:any)=>{
    
    if(prevProps.departmentid!==this.props.departmentid){
        this.changes();
    }

}






render(){
  if(this.state.doctors&&this.props.departmentid){
    //   console.log(this.props.departmentid)
      return(
<>
      {/* <p>{this.props.departmentid}</p> */}
      <h2>{this.state.doctors[0].department.departmentName.toUpperCase() }</h2>
      
      {this.state.doctors.map((doctor:Doctor)=>{




return(

    <DisplayDoctorComponent key={doctor.doctorId} doctor={doctor}/>






     ) })}


 

</>




      )





  }else{
      return(
          <p></p>
      )
  }

    
}


}

export let DepartmentDoctorsComponentR=withRouter(DepartmentDoctorsComponent);