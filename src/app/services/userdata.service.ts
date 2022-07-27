import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  user(){
    return this.http.get('http://api.weatherapi.com/v1/current.json?key=70ff7b6e9d854b4b806182916222707 &q=London&aqi=no')
  }
  forcastData(){
    return this.http.get('http://api.weatherapi.com/v1/forecast.json?key=70ff7b6e9d854b4b806182916222707&q=lahore&days=3&aqi=no&alerts=no')
    
  }
}
