import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-grievance-report-list',
  templateUrl: './grievance-report-list.page.html',
  styleUrls: ['./grievance-report-list.page.scss'],
})
export class GrievanceReportListPage implements OnInit {

  grievData:any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.employeeFetchGrievanceApp();
  }

  employeeFetchGrievanceApp(){
    let data = {
      empId:JSON.parse(localStorage.getItem('userdata') || '{}').id,
    }
    this.api.employeeFetchGrievanceApp(data).subscribe(res=>{
      this.grievData = res.body.data;
    })
  }

}
