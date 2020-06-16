import React from "react";
import { Container, Form, FormGroup, Label, Button, Modal, Input } from "reactstrap";
import { saveEmergency } from "../../api/apipatient";

interface Inew{
    patient:any,
    ontoggle:any,
    modal:any
}

interface InewState{
    name:any,
    address:any,
    relation:any,
    phone:any



}

export class NewEmergencyComponent extends React.Component<Inew,InewState>{

constructor(props:any){
    super(props)

    this.state={
        name:"",
        address:"",
        relation:"",
        phone:""




    }
}

changepropmodal=()=>{
    this.setState({
        name:"",
        address:"",
        relation:"",
        phone:""
    
    
    })
this.props.ontoggle();

}

onName=(event:any)=>{let x=event.target.value; this.setState({name:x})}
onAddress=(event:any)=>{let x=event.target.value; this.setState({address:x})}
onRelation=(event:any)=>{let x=event.target.value; this.setState({relation:x})}
onPhone=(event:any)=>{let x=event.target.value; this.setState({phone:x})}

onSubmits=async(event:any)=>{
    event.preventDefault();
    try{
        let response=await saveEmergency(this.state.name,this.state.address,this.state.phone,this.state.relation,this.props.patient);
console.log(response);
this.changepropmodal();
this.setState({
    name:"",
    address:"",
    relation:"",
    phone:""


})


    }catch(e){
        console.log(e);
        this.changepropmodal();
    }

    

    
}

render(){
return(
    <Modal isOpen={this.props.modal}  >
    <Container>
    <Form onSubmit={this.onSubmits}>
    <FormGroup>
    <Label>Name</Label>
    <Input type="text" name="details" value={this.state.name} onChange={this.onName} required />
    
    </FormGroup>
    <FormGroup>
    <Label>Address:</Label>
    <Input type="text" value={this.state.address}  onChange={this.onAddress} required />
    </FormGroup>
    <FormGroup>
    <Label>Phone:</Label>
    <Input value={this.state.phone} type="text"  onChange={this.onPhone} required/>
    </FormGroup>
    <FormGroup>
    <Label>Relation:</Label>
    <Input value={this.state.relation} type="text"  onChange={this.onRelation} required/>
   
    </FormGroup>
    <Button type="submit">Confirm</Button>
    <Button onClick={this.changepropmodal} className="mt-1 mb-1 ml-1">Cancel</Button>  
    
    
    
    
    </Form>
    
     
      </Container>
    </Modal>  



)




}


}