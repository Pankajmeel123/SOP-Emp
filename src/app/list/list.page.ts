import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  messData:any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    let data = {
      detail:{
        value:new Date().getMonth()+1
      }
    }
    this.employeeListOfMessHistoryApp(data);
  }

  employeeListOfMessHistoryApp(e:any){
    console.log(e)
    let data = {
      empId:JSON.parse(localStorage.getItem('userdata') || '{}').id,
      current_month:parseInt(e.detail.value)
    }
    this.api.employeeListOfMessHistoryApp(data).subscribe(res=>{
      console.log(res.body.data);
      this.messData = res.body.data.mess;
    })
  }

}
