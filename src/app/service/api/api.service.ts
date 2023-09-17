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
      empId:JSON.parse(localStorage.getItem('userdata') || '{}').id
    }
    return this.Http.post<any>(environment.url + 'employeeFetchAvailabilityApp.json',data,{observe:'response'});
  }

  employeeListOfMessHistoryApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'employeeListOfMessHistoryApp.json',data,{observe:'response'});
  }

  employeeListAttendanceApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'employeeListAttendanceApp.json',data,{observe:'response'});
  }

  employeeAddAvailabilityApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'employeeAddAvailabilityApp.json',data,{observe:'response'});
  }

  employeeShiftAllApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'employeeShiftAllApp.json',data,{observe:'response'});
  }

  employeeAddGrievanceApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'employeeAddGrievanceApp.json',data,{observe:'response'});
  }

  employeeFetchLeaveApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'employeeFetchLeaveApp.json',data,{observe:'response'});
  }

  employeeAddLeaveApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'employeeAddLeaveApp.json',data,{observe:'response'});
  }

  employeeFetchGrievanceApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'employeeFetchGrievanceApp.json',data,{observe:'response'});
  }

  loginApp(data:any):Observable<HttpResponse<any>>{
    return this.Http.post<any>(environment.url + 'loginApp.json',data,{observe:'response'});
  }
}
