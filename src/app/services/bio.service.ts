import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable({
  providedIn: 'root'
})
export class BioService {

   private username:string; 
   private clientid: 'd07b7899161abd248a4f';
   private clientsecret: '623d37f46325eef178d4e1f5913cf91cd861e28f';

  constructor(private http:Http) {
    console.log("service ready");
    this.username = 'kelvinkyalo';
   }
   getBioInfo(){
     return this.http.get("https://api.github.com/users/"+ this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json);
   }
}
