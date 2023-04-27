import { LightningElement,api } from 'lwc';
import methodName from '@salesforce/apex/AuraEnblapex.methodName';


export default class Pdfgen extends LightningElement {
@api recordId;

image='https://cdn.dribbble.com/users/1787323/screenshots/11427608/media/8fda96ec0ca9b0477fbd612f709e5c37.png?compress=1&resize=400x300';

invoice ={

        date:'20/900/78',
        place:'siddipet',
        state:'stelangana'

}


services =[
              {name:'mersj khan',Amount:20},
              {name:'sharukh khan',Amount:30},
              {name:'salman khan',Amount:70},
                  

];


get totalamount(){

return this.services.reduce((total,it)=>{

return total= total+it.Amount

},0)


}

genratepdf(){


    let conten = this.template.querySelector('.container');
    console.log(conten.outerHTML);

    methodName({recordId:this.recordId, htmlData:conten.outerHTML}).then(
        result=>{

window.open(`https://mkmkdomain-dev-ed.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`)
            console.log(result)
        }
    ).catch(error=>{

        console.error(error)
    })

}







}