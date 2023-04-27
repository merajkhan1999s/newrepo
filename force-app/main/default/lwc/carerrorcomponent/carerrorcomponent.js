import { LightningElement,api } from 'lwc';
import PIC from '@salesforce/resourceUrl/errorpic'
export default class Carerrorcomponent extends LightningElement {
@api message='SELECT A CAR TO PREVIEW THE DETAILS'

    pic = PIC
}