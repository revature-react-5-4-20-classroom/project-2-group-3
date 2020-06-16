

 export  let times=()=>{
    let date1 = new Date();
    console.log(date1.getUTCDay());
    let dateutc = Date.UTC(date1.getUTCFullYear(), date1.getUTCMonth(), date1.getUTCDate(),
    date1.getUTCHours(), date1.getUTCMinutes(), date1.getUTCSeconds());
    let tomorrow1 = new Date(dateutc);
    let dayafterT1 = new Date(dateutc);
    let dayafterT31 = new Date(dateutc);

switch(date1.getUTCDay()){

    case 3:
        tomorrow1.setDate(new Date().getDate() + 1);
        dayafterT1.setDate(new Date().getDate() + 2);
        dayafterT31.setDate(new Date().getDate() + 5);
        break;
  
  
    case 4:
        tomorrow1.setDate(new Date().getDate() + 1);
        dayafterT1.setDate(new Date().getDate() + 4);
        dayafterT31.setDate(new Date().getDate() + 5);
        break;




    case 5:
        tomorrow1.setDate(new Date().getDate() + 3);
        dayafterT1.setDate(new Date().getDate() + 4);
        dayafterT31.setDate(new Date().getDate() + 5);
        break;



    case 6:
        tomorrow1.setDate(new Date().getDate() + 2);
        dayafterT1.setDate(new Date().getDate() + 3);
        dayafterT31.setDate(new Date().getDate() + 4);
        break;



    default:
        tomorrow1.setDate(new Date().getDate() + 1);
        dayafterT1.setDate(new Date().getDate() + 2);
        dayafterT31.setDate(new Date().getDate() + 3);
        break;


}




let tomorrow = tomorrow1.toISOString().slice(0, 10);

let dayafterT = dayafterT1.toISOString().slice(0, 10);

let dayafterT3 = dayafterT31.toISOString().slice(0, 10);

return[tomorrow,dayafterT,dayafterT3];





}


