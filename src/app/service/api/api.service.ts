import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  data = JSON.parse(localStorage.getItem('userdata') || '{}').id

  constructor(private Http:HttpClient) { }

  employeeInfoApp():Observable<HttpResponse<any>>{
    let data = {
      empId:JSON.parse(localStorage.getItem('userdata') || '{}').id
    }
    return this.Http.post<any>(environment.url + 'employeeInfoApp.json',data,{observe:'response'});
  }

  employeeShiftApp():Observable<HttpResponse<any>>{
    let data = {
      empId:JSON.parse(localStorage.getItem('userdata') || '{}').id
    }
    return this.Http.post<any>(environment.url + 'employeeShiftApp.json',data,{observe:'response'});
  }

  employeeFetchAvailabilityApp():Observable<HttpResponse<any>>{
    let data = {
      empId:3
    }
    return this.Http.post<any>(environment.url + 'employeeFetchAvailabilityApp.json',data,{observe:'response'});
  }

  loginApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'loginApp.json',data,{observe:'response'});
  }
}
