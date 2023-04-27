import { LightningElement,api } from 'lwc';

export default class ChildCmp extends LightningElement {

    @api getValueFromParent;
    hello="this is mk";
}