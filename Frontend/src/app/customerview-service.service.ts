import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerviewServiceService {

  constructor(private http:HttpClient) { }

  getCustomerview(){
  return this.http.get<any>('http://localhost:3000/CustomerDetails')
}
}

