import {bindable} from 'aurelia-framework';
export class CenterPanel {
     @bindable width="80%";
     @bindable imgwidth="800px";
     @bindable title;
     @bindable subtitle;
     @bindable href;
     @bindable img;
     @bindable spaceafter = "true";

     bind(){
        if (typeof this.spaceafter === 'string') this.spaceafter = this.spaceafter === "true";
        console.log('center-panel: spaceafter',this.spaceafter);
     }
}