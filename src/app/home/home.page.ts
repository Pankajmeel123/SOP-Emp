import { Component } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { OtherService } from '../service/other/other.service';
import { EmployeesAddPage } from '../employees-add/employees-add.page'
import { ModalController } from '@ionic/angular';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { Clipboard } from '@capacitor/clipboard';

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

  constructor(private api:ApiService, private modalController: ModalController, private other:OtherService) {
    this.profile = JSON.parse(localStorage.getItem('userdata') || '{}');
    if(this.profile.first_time_login){
      this.presentChangePasswordModal();
    }
    this.employeeInfoApp();
  }

  async presentChangePasswordModal() {
    const modal = await this.modalController.create({
      component: ChangePasswordComponent,
      componentProps:{
        isFirst:true
      },
      cssClass: 'my-custom-class',
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    // this.form.datetimeIn = data.split('T')[0];
    console.log(data);
  }

  employeeInfoApp(){
    this.api.employeeInfoApp().subscribe(res=>{
      this.dashData = res.body.data;
      this.employeeShiftApp();
    })
  }

  writeToClipboard = async (data:string) => {
    await Clipboard.write({
      string: data
    });
    this.other.presentToast('Stage password copied !!', 'success');
  };

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
    await modal.present();
    await modal.onWillDismiss();
    this.employeeFetchAvailabilityApp();
  }

}
