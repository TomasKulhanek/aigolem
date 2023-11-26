import {inject} from "aurelia-dependency-injection";
//import {Bdapi} from "./bdapi";
//import {EventAggregator} from 'aurelia-'
import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Panel {
    //@bindable allowAuth;
    @bindable href;
    @bindable icon;
    @bindable title;
    islogged = false;
    constructor(ea){
        this.ea = ea;
        //this.bdapi = bdapi;
    }

    bind() {
        this.ea.subscribe('logging', loggedin =>{ 
            console.log('panel recieved logging event(), payload:',loggedin);
            this.islogged = loggedin
        });
    }

    attached(){
        /*if (!this.api.islogged) {
            this.api.checklogged()
        }*/

        //this.islogged = this.bdapi.islogged;
        console.log('panel attached(),initial islogged', this.islogged);
    }
}