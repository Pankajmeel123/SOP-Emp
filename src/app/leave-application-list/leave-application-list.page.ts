import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-leave-application-list',
  templateUrl: './leave-application-list.page.html',
  styleUrls: ['./leave-application-list.page.scss'],
})
export class LeaveApplicationListPage implements OnInit {

  leaveData:any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.employeeFetchLeaveApp();
  }

  employeeFetchLeaveApp(){
    let data = {
      empId:JSON.parse(localStorage.getItem('userdata') || '{}').id,
    }
    this.api.employeeFetchLeaveApp(data).subscribe(res=>{
      console.log(res.body.data);
      this.leaveData = res.body.data;
    })
  }

}
