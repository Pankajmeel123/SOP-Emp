import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../date/date.component';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../service/api/api.service';
import { OtherService } from '../service/other/other.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.page.html',
  styleUrls: ['./leave-application.page.scss'],
})
export class LeaveApplicationPage implements OnInit {

  form={
    empId:'',
    leave_type:'full_day',
    no_of_full_days:'',
    type_of_half_day:'0',
    leave_request_date:'',
    leave_reason:'',
  }

  constructor(private modalController:ModalController, private api:ApiService, private other:OtherService) { }

  ngOnInit() {
  }

  employeeAddLeaveApp(){
    this.form.empId = JSON.parse(localStorage.getItem('userdata') || '{}').id;
    this.api.employeeAddLeaveApp(this.form).subscribe(res=>{
      this.modalController.dismiss();
      this.other.presentToast(res.body.message,'success');
      history.back();
    })
  }

  async presentDateModal() {
    const modal = await this.modalController.create({
      component: DateComponent,
      cssClass: 'my-custom-class',
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.form.leave_request_date = data;
    console.log(data);
  }

}
