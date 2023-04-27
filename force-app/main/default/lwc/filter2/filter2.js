import { LightningElement,wire } from 'lwc';
import lwcsoql from '@salesforce/apex/lwcsoql.method'

export default class Filter2 extends LightningElement {

    filterdata;
    val;
    filtertable;
    timer;
columns=["Id","Name","Rating","Phone"]
@wire(lwcsoql)sscdata({data,error}){

if(data){
 
    
    this.filterdata=data
    this.filtertable=data
    console.log(data)
}

}

get col(){

    return [{label:"All",value:"All"},
    {label:"Id",value:"Id"},
    {label:"Name",value:"Name"},
    {label:"Phone",value:"phone"},
    {label:"Rating",value:"Rating"},

                         ]
}
combohandler(event){

    this.val = event.target.value
}
searchhandler(event){

const {value} = event.target;
window.clearTimeout(this.timer)


    
    

        this.filterdata =  this.filtertable.filter(obj=>{

            return Object.keys(obj).some(dat=>{
           
                 return obj[dat].toLowerCase().includes(value)} )
            }
    
        
            
)
            
            
            
                

    

    }
}