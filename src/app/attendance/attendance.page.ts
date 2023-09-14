import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  attendanceData:any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    let data = {
      detail:{
        value:new Date().getMonth()+1
      }
    }
    this.employeeListAttendanceApp(data);
  }

  employeeListAttendanceApp(e:any){
    console.log(e)
    let data = {
      empId:3,
      current_month:parseInt(e.detail.value)
    }
    this.api.employeeListAttendanceApp(data).subscribe(res=>{
      console.log(res.body.data);
      this.attendanceData = res.body.data.attendance;
    })
  }

}
