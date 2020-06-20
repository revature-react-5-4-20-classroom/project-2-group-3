
import React from "react";


interface IProps{
    timeSlot:number
}

interface IDisState{
    timeFromTo:any
}

export class ChangeTimeSlotComponent extends React.Component<IProps,IDisState>{


    constructor(props:IProps){
        super(props);
        this.state={
            timeFromTo:null
        }
    }

componentDidMount=()=>{
    this.changeView(this.props.timeSlot);
// console.log(this.props.timeSlot);


}


// componentDidUpdate=(prevProps:any)=>{
    
//     if(prevProps.timeSlot!==this.props.timeSlot){
        
//         this.changeView(this.props.timeSlot);
//     }

// }

// componentWillReceiveProps=(nextProps:any)=>{
//     if(nextProps.timeSlot!==this.props.timeSlot){
        
//         this.changeView(nextProps.timeSlot);
//     }


// }


changeView=(timeSlot:number)=>{
    // console.log(this.state.timeFromTo)

    switch(timeSlot){
        case 1:
            this.setState({
                timeFromTo:"10-10:30 AM"

            })
            break;
          
                    case 2:
                        this.setState({
                            timeFromTo:"10:30-11 AM"
            
                        })
                        break;
                        case 3:
                            this.setState({
                                timeFromTo:"11-11:30 AM"
                
                            })
                            break;
                            case 4:
                                this.setState({
                                    timeFromTo:"11:30-12 PM"
                    
                                })
                                break;
                                case 5:
                                    this.setState({
                                        timeFromTo:"12-12:30 PM"
                        
                                    })
                                    break;
                                    case 6:
                                        this.setState({
                                            timeFromTo:"12:30-1 PM"
                            
                                        })
                                        break;
                                        case 7:
                                            this.setState({
                                                timeFromTo:"3-3:30 PM"
                                
                                            })
                                            break;
                                            case 8:
                                                this.setState({
                                                    timeFromTo:"3:30-4 PM"
                                    
                                                })
                                                break;
                                                case 9:
                                                    this.setState({
                                                        timeFromTo:"4-4:30 PM"
                                        
                                                    })
                                                    break;
                                                    case 10:
                                                        this.setState({
                                                            timeFromTo:"4:30-5 PM"
                                            
                                                        })
                                                        break;
                                                       default:
                                                           break;


    }

}



render(){


    if(this.state.timeFromTo){
        return(
            <>
            {this.state.timeFromTo}
            </>
        )
    }else{
        return(
            <>
            <p>none</p>
            </>
        )
    }


}

}



export let changeView=(timeSlot:number):String=>{
 
let timeFromTo="";

let arrtimes=["","10-10:30 AM","10:30-11 AM","11-11:30 AM","11:30-12 PM","12-12:30 PM","12:30-1 PM","3-3:30 PM","3:30-4 PM","4-4:30 PM","4:30-5 PM"];
for(let i=1;i<=11;i++){
    console.log("hello")
    if(timeSlot==i){
        timeFromTo=arrtimes[i];
        console.log(timeFromTo)
        break;
    }
}



    console.log(timeFromTo);

if(timeFromTo===""){
    return "no vale"
}else{
    return(
        timeFromTo

    )
}

}

