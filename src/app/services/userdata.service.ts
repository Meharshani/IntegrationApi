import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  user(){
    return this.http.get('http://api.weatherapi.com/v1/current.json?key=c6434394d9a84f35ba7194904222507 &q=London&aqi=no')
  }
}
