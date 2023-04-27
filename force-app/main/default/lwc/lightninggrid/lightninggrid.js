import { LightningElement,wire } from 'lwc';

import fetchcase from '@salesforce/apex/fetchcase.fetchmethod'
export default class Lightninggrid extends LightningElement{
 gridData=[]

  
   @wire(fetchcase)fetching({data,error}){

       if(data){

         console.log(data)

       this.gridData= data.map(item=>{

             const {Cases ,...datas}=item
             let temps ={...datas}
                  temps.CaseNumberName='/'+temps.Id
               
                  let vv = {...Cases}
                let obb = JSON.stringify(vv)
            
        return  {...temps,"_children":obb}


        })

       }
       if(error){
           console.error(error)
       }
   }

    gridColumns=[
        {
            label:'CaseNumber',
            fieldName:'CaseNumberName',
           type:'url',
            typeAttributes:{
               label :{ fieldName:'CaseNumber'},
                target: '_blank'
              
                
             }
        },
        {
            label:'ContactEmail',
            fieldName:'ContactEmail',
            type:'email'
        },
        {
            label:'Type',
            fieldName:'Type',
            type:'text',
          
        }
    ]
   
  }