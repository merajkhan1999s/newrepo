import { LightningElement } from 'lwc';
import lightningalert from 'lightning/alert'
import lightningconfirm from 'lightning/confirm'
export default class Lightningalert extends LightningElement {

 async  alerthandle(){

    await  lightningalert.open({
message:'sorry some thing is wrong',
label:'sry',
theme:'success'

        })  //then(result=>{
    //         console.log(result)
       let x =22
       let y = 3
      this.add(x,y)


    //     })
    

    }


    add(a,b) {
    console.log(a+b)
        
        }


       async confirmhandler(){
        
       const cc  =   await  lightningconfirm.open({
                message:'are u sure u wana save this record',
                label:'please comfirm again',
                theme:'success'

  })

if(cc){
console.log('yes confirmed')
location.reload()
}
     


        }



}