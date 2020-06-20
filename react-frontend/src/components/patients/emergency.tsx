

import React from "react";
import { getEmergency } from "../../api/apipatient";
import { connect } from "react-redux";
import { IState } from "../../redux/reducers";
import { CardBody, Card, ListGroup, ListGroupItem, Container, Row, Col, Button } from "reactstrap";
import { Econtact } from "../../models/econtact";
import { NewEmergencyComponent } from "./emergencyModal";




export class EmergencyComponent extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state={
            econtacts:null,
            toggle:false
        }
    }


    componentDidMount=async()=>{
this.onChange();
    

      }


      onChange=async()=>{
        if(this.props.patient&&this.props.patient.patientId!=0){
console.log(this.props.patient);
            try{
                let response=await getEmergency(this.props.patient.patientId);
                console.log(response);
                this.setState({
                    econtacts:response
                })
    
            }catch(e){
    
    
            }
    
        }



      }

      ontoggle=()=>{
          let toggle=this.state.toggle;
          this.setState({
              toggle:!toggle
          })
          this.onChange();


      }
      
  
    
    
    
    render(){
        
        if(this.state.econtacts){
            let econtact:Econtact[]=this.state.econtacts;
            return(
                <Container fluid >
                <Row>
                    <Col sm="6">  
                    <Button onClick={this.ontoggle} className="mb-1">Add New</Button>
                    <NewEmergencyComponent ontoggle={this.ontoggle} modal={this.state.toggle} patient={this.props.patient}/>
              { 
                  econtact.map((elem:any,i:any)=>{


                    return(

                                          
<Card key={i}>

<CardBody>
<ListGroup>
<ListGroupItem>
    Name: {elem.name}
</ListGroupItem>
<ListGroupItem>
    Address {elem.address}
</ListGroupItem>
<ListGroupItem>
 Phone: {elem.phone}
</ListGroupItem>
<ListGroupItem>
relation: {elem.relation}
</ListGroupItem>

</ListGroup>

    
</CardBody>
    
</Card>

                
             ) } )  } 
             
             
             </Col>
</Row>
</Container>
             )



        }else{
            return(
                <>
                </>
            )
        }






    }
}



const mapStateToProps = (state: IState) => {

 
    return {
      ...state.loginUser
    }
  
  }
  
  const mapDispatchToProps = {


  
  
  }
  
  
  export let   EmergencyComponentS = connect(mapStateToProps, mapDispatchToProps)(EmergencyComponent);