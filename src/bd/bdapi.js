import {HttpClient,json} from 'aurelia-fetch-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from "aurelia-dependency-injection";

/** shared struct among components
 *
 */
@inject(EventAggregator)
export class Bdapi {
  users = [];
  //localapiurl = 'http://localhost:5001/egolem-8ee91/us-central1/api';
  localapiurl = 'https://us-central1-egolem-8ee91.cloudfunctions.net/api';
  remoteapiurl = 'https://us-central1-egolem-8ee91.cloudfunctions.net/api';


  constructor(ea) {
    console.log('creating Bdapi()');
    this.ea = ea;
    this.client = new HttpClient();
    //this.apiurl = this.remoteapiurl;
    this.apiurl = (window.location.protocol === 'http:') ? this.localapiurl : this.remoteapiurl;
    let lfthis = this;
    this.client.configure(config => {
      config.useStandardConfiguration()
        .withBaseUrl(this.apiurl) //defining default api url
        .withInterceptor({ //interceptor adding authHeader
          request(request) {
            if (lfthis.token) {
              let authHeader = 'Bearer ' + lfthis.token;
              request.headers.append('Authorization', authHeader);
            } else {
              console.log('loginfb.interceptor() warning no token available. lfthis:',lfthis);
            }
            return request;
          }
        })
    })
  }

  checklogged(auth){
    if (auth) {this.auth = auth}
    //1. check auth - current user
    if (this.auth) {
      this.islogged = this.auth._delegate && this.auth._delegate.currentUser;
      if (this.islogged) {
        this.eguser = this.auth._delegate.currentUser.displayName;
        this.egemail = this.auth._delegate.currentUser.email;
        this.token = this.auth._delegate.currentUser.accessToken;
      }
      console.log('checklogged() bdapi sending logging event() payload:',this.islogged);
      this.ea.publish('logging', this.islogged);
      return;  
    }
    //2. check cookies
    console.log('bdapi.checklogged()')
    this.users = [];
    let s = document.cookie.indexOf('__session=');
    this.islogged = s>=0;
    if (this.islogged) {
      //parse cookies
      let cs = document.cookie.split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
          acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
          return acc;
        }, {});
      
      this.eguser = cs["__eguser"];
      this.egemail = cs["__egemail"];
      this.token = cs["__session"];
      //this.getusers();
    } else {
      this.eguser="";
      this.token = false;
    }
    console.log('checklogged() bdapi sending logging event() payload:',this.islogged);
    this.ea.publish('logging', this.islogged);
  }

  
}
