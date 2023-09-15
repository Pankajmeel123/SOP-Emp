import { Component } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { EmployeesAddPage } from '../employees-add/employees-add.page'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dashData:any;
  shiftData:any = {
    today:null,
    tomorrow:null
  };
  availData:any;
  profile:any;

  constructor(private api:ApiService, private modalController: ModalController) {
    this.profile = JSON.parse(localStorage.getItem('userdata') || '{}');
    this.employeeInfoApp();
  }

  employeeInfoApp(){
    this.api.employeeInfoApp().subscribe(res=>{
      this.dashData = res.body.data;
      this.employeeShiftApp();
    })
  }

  employeeShiftApp(){
    this.api.employeeShiftApp().subscribe(res=>{
      this.shiftData.today = res.body.data.filter((res2:any) => res2.shift_date == new Date().toJSON().split('T')[0])[0];
      this.shiftData.tomorrow = res.body.data.filter((res2:any) => res2.shift_date == new Date(new Date().setDate(new Date().getDate()+1)).toJSON().split('T')[0])[0];
      this.employeeFetchAvailabilityApp();
    })
  }

  employeeFetchAvailabilityApp(){
    this.api.employeeFetchAvailabilityApp().subscribe(res=>{
      this.availData = res.body.data;
    })
  }

  async presentAvailabilityModal() {
    const modal = await this.modalController.create({
      component: EmployeesAddPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

}
