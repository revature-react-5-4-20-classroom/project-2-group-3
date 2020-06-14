
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
console.log(this.props.timeSlot);


}

changeView=(timeSlot:number)=>{

    switch(timeSlot){
        case 1:
            this.setState({
                timeFromTo:"10-10:30 AM"

            })
            break;
            case 1:
                this.setState({
                    timeFromTo:"10-10:30 AM"
    
                })
                break;
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