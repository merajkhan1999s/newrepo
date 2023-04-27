import { LightningElement } from 'lwc';
const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookApp extends LightningElement {

query='man';
vall;

connectedCallback(){

    this.fetchbook()
}

fetchbook(){

fetch(URL+this.query).then(response=>response.json())
.then(data=>{
    console.log(data);
    this.vall=data
})
.catch(error=>{console.error(error)});

}


handlechnage(event){

    this.query=event.target.value;
window.clearTimeout(this.timer)

this.timer=setTimeout(() => {
    this.fetchbook()
    
}, 2000);

}

}