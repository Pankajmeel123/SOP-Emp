import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-all-shifts',
  templateUrl: './all-shifts.page.html',
  styleUrls: ['./all-shifts.page.scss'],
})
export class AllShiftsPage implements OnInit {

  shiftData:any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    let data = {
      detail:{
        value:new Date().getMonth()+1
      }
    }
    this.employeeShiftAllApp(data);
  }

  employeeShiftAllApp(e:any){
    let data = {
      empId:JSON.parse(localStorage.getItem('userdata') || '{}').id,
      current_month:parseInt(e.detail.value)
    }
    this.api.employeeShiftAllApp(data).subscribe(res=>{
      this.shiftData = res.body.data;
    })
  }

}
