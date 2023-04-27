import { LightningElement } from 'lwc';

export default class Covidd extends LightningElement {
datas=[]
dates
posi
negat
obj
daat=[] 

Columns = [
    { label: 'DATE', fieldName:"date" , type:"Number" },
    { label: 'POSITIVE', fieldName: "positive" ,type:"Number" },
    { label: 'NEGATIVE', fieldName:"negative" ,type:"Number" }

];


    action(){

    fetch("https://api.covidtracking.com/v1/us/daily.json"
    ).then(response=>response.json()).then((data)=>{
    
     this.daat = data.map(element => 
        {
            return {
            "date":element.date , 
            "positive":element.positive , 
            "negative":element.negative
         }
        }
       )

    console.log(this.daat )
     
    }).catch(error=>console.error(error))
         
         
     
     
 }

}