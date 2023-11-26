import {inject} from "aurelia-dependency-injection";
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Prompt {
    inputValue='';
    history =[];

    constructor(ea) {
        this.ea = ea;
    }
    submit() {
        //send inputValue
        console.log('value',this.inputValue);
        let myValue = this.inputValue;
        this.ea.publish('prompt',myValue);
        this.history.push(this.inputValue);
        this.inputValue='';
    }
}