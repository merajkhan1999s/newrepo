import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToObjectPage extends NavigationMixin (LightningElement) {

    show() {
       
        const event = new ShowToastEvent({
           
            title:'SUCCESS',
             message:'Salesforce documentation is available in the app.',
             variant:'warning',
             
        });
        this.dispatchEvent(event);
    }


navig(){

           this[NavigationMixin.Navigate]({

                      type:'standard__objectPage',
                      attributes:{
                          objectApiName:'Account',
                          actionName:'home',

                      }


           });
}

navipage(){

    this[NavigationMixin.Navigate]({

               type:'standard__namedPage',
               attributes:{
                   
                pageName:'home'

               }


    });

}
}