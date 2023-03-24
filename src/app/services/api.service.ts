import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getDetails(countryf:string){
  let  baseUrl="http://api.exchangerate.host/latest?base="+countryf
  return this.http.get(baseUrl)

  }
}
