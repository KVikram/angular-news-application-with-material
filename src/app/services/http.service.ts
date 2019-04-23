import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL : String;

  constructor(private httpClient: HttpClient) { }

  get(url){
    return this.httpClient.get(this.baseURL+url,{ observe: 'response' });
  }

  getAPI(url){
    return this.httpClient.get(url);
  }

  post(url,data){
    return this.httpClient.post(this.baseURL+url, data, httpOptions);
  }
}
