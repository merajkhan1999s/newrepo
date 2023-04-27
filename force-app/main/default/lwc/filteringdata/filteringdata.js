import { LightningElement, wire } from 'lwc';
import filterapex from '@salesforce/apex/filterapex.method';
export default class Filteringdata extends LightningElement {

heading =["Id","Name","Phone","Industry"];
filterdata=[];
filtertable=[];
filter='name';

sortDirection ='asc';
@wire(filterapex)wiredata({data,error}){


    if(data){
  this.filterdata=data;
  this.filtertable=data;
console.log('wire data'+data)

console.log(data);
    }
    if(error){

        console.error(error)
    }
}

changekeyup(event){
    const {value}=event.target
    console.log(value)
    window.clearTimeout(this.timer)
    if(value){ 
this.timer =window.setTimeout(()=>{
            
            this.filterdata =  this.filtertable.filter(ec=>{
console.log('filter map data'+ec)

if(this.filt === "ALL"){

    return Object.keys(ec).some(key=>{
       console.log('keys are here',ec[key])
        return ec[key].toLowerCase().includes(value)
})
}
else{ 
                // console.log('filt value with filter data '+ec[this.filt])
         const vv = ec[this.filt] ? ec[this.filt]:''
                 return vv.toLowerCase().includes(value)


               
}
                  })
            

        },200)

  }
   else{
   this.filterdata=[...this.filtertable]


     }

}

get filterbyoptions(){

return [{label:"All",value:"ALL"},
    {label:"Id",value:"Id"},
         {label:"Name",value:"Name"},
         {label:"Phone",value:"Phone"},
         {label:"Industry",value:"Industry"}


];

}



get sortbyoptions(){

    return [
        {label:"Id",value:"Id"},
             {label:"Name",value:"Name"},
             {label:"Phone",value:"Phone"},
             {label:"Industry",value:"Industry"}
    
    
    ];
    
    }

filterhandlet(event){

    this.filt=event.target.value
    console.log('combo boxvalue'+this.filt)
}

sorthandler(event){


    this.sorrt = event.target.value;
    this.filterdata = [...this.sortby(this.filterdata)];
}

sortby(data){

const cloned = [...data];
cloned.sort((a,b)=>{
if(a[this.sorrt]===b[this.sorrt]){
return 0;

}
return this.sortDirection === 'desc' ?
a[this.sorrt] > b[this.sorrt] ? -1:1:
a[this.sorrt] < b[this.sorrt] ? -1:1
})

return cloned


}

}