import { LightningElement } from 'lwc';
import RESOURCE from '@salesforce/resourceUrl/moment';
import MOMENT from '@salesforce/resourceUrl/moment'
import {loadScript} from 'lightning/platformResourceLoader'
export default class Momentjscomponent extends LightningElement {

        currentDate=''
        isLibLoaded = false
        renderedCallback(){ 
            if(this.isLibLoaded){ 
                return
            } else { 
       
                loadScript(this, MOMENT+'/moment.min.js').then(()=>{ 
                    this.setDateOnScreen()
                }).catch(error=>{ 
                    console.error(error)
                })
                this.isLibLoaded = true
            }
           
        }
        setDateOnScreen(){ 
            this.currentDate = moment().format('LLLL')
            console.log(this.currentDate)
        }
    }