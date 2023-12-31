import {inject} from "aurelia-dependency-injection";
import {EventAggregator} from 'aurelia-event-aggregator';
import {HttpClient} from 'aurelia-fetch-client';


@inject(EventAggregator,HttpClient)
export class PromptOutput {

    pos = [];
    currentindex=0;
    remoteurl='http://localhost:8000/items/'

    constructor(ea,client){
        this.ea = ea;
        this.client = client;
    }

    attached(){
        this.ea.subscribe('prompt', value =>{ 
            console.log('panel recieved logging event(), payload:',value);
            let response = '... ';
            if (value.startsWith('.fhir'))
            {
                response = 'retrieving fhir record ...';
            } else if (value.startsWith('.data')){
                response = 'retrieving external data record ...';
            } else if (value.startsWith('.switch')){
                response = 'switching engine ...';
            } else {
                this.postvalue = JSON.stringify({"prompt":value});
                this.post();
            }           
            this.currentindex = this.pos.push({request: value,response: response});                        
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    post(id) {
        //sends POST request tod
        let myheaders = new Headers();
        myheaders.append('Accept', 'application/json');
        myheaders.append('Content-Type', 'application/json')
        //localStorage.setItem('bdl-fhir-url',this.remoteurl);
        if (this.remoteheadervalue && this.remoteheadervalue.length > 0) {
            myheaders.append(this.remoteheader, this.remoteheadervalue);

            //localStorage.setItem('bdl-fhir-api-key',this.remoteheadervalue);
        }
        let url = this.remoteurl + (id ? '/' + id : '');
        //if (!this.posterror)
        let res;
        this.client.fetch(url, {method: 'post', headers: myheaders, body: this.postvalue})
            //.then(response => response.json())// do response.json() for json result
            .then((response) => response.json())
            .then((data) => (res = data))
            .then(() => {

                //console.log('returned data:', data)
                this.remotevalue = res
                console.log('returned data:', this.remotevalue);
                this.currentindex = this.pos.push({request: "",response: this.remotevalue});                        
                //this.pos[this.currentindex-1] = {request: value,response: this.remotevalue};
            })
            .catch(err => {
            console.warn('probably no data returned',err);
            this.posterror = true;
        });
        /*this.client.get(this.remoteurl)
            .then(response => response.json())// do response.json() for json result
            .then(data => {
                //console.log('markdownaurelia fetched md:', data)
                this.remotevalue = data;
                this.remotevalueformatted = JSON.stringify(this.remotevalue,null,4)
            });*/
    }
}