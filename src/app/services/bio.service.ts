import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BioService {
  //   getBioInfo: any;
  private username: string;
  private clientid = 'eb2e72fd0b231f431b5b';
  private clientsecret = '8cc2493fbf6129392085fefc07af8e11faa57fa2';

  constructor(private http: HttpClient) {
    console.log('service ready');
    this.username = 'kirandash';

  }

  getBioInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid 
    + "&client_secret=" + this.clientsecret)
    .map(res =>res.json());
  }
}
