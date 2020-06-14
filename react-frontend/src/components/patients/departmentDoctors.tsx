
import React from "react";
import { departmentDoctors } from "../../api/apipatient";
import { Doctor } from "../../models/doctor";
import { Card, CardBody, ListGroup, ListGroupItem, Button, Modal, ModalBody, Collapse } from "reactstrap";
import { DisplayDoctorComponent } from "./displaydoctorappointment";


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
console.log(this.props.departmentid)
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






render(){
  if(this.state.doctors){
      return(
<>
      <h2>{this.state.doctors[0].department.departmentName.toUpperCase()}</h2>
      
      {this.state.doctors.map((doctor:Doctor)=>{



// let isOpen=false;
//          let toggle=()=>{
// isOpen=!isOpen;


        //   }
return(

    <DisplayDoctorComponent key={doctor.doctorId} doctor={doctor}/>
//           <div key={doctor.doctorId}>
//              <Card>
//                  <CardBody>
// <ListGroup>
// <ListGroupItem>
// Name: {doctor.firstName} {doctor.lastName}
// </ListGroupItem>
// <ListGroupItem>
// Speciality: {doctor.speciality}
// </ListGroupItem>



// </ListGroup>



// <Button className=" mt-1" onClick={toggle} >Make an Appointment</Button>

// <Collapse isOpen={isOpen}>
// <div>

// hello



// </div>



// </Collapse>


//                  </CardBody>
                
                 
                 
//                  </Card> 




//           </div>





     ) })}


 

</>




      )





  }else{
      return(
          <p>Hello</p>
      )
  }

    
}


}