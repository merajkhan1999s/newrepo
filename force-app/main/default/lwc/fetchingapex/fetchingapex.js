import { LightningElement,wire } from 'lwc';
import methd from '@salesforce/apex/SesAss.getAcccountlist';

export default class Fetchingapex extends LightningElement {

@wire(methd)wiredata;


}