import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DateComponent } from '../date/date.component';
import { ApiService } from '../service/api/api.service';
import { OtherService } from '../service/other/other.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-grievance-report',
  templateUrl: './grievance-report.page.html',
  styleUrls: ['./grievance-report.page.scss'],
})
export class GrievanceReportPage implements OnInit {

  form = {
    empId:'',
    statement_of_grievance:'',
    relief_sought:'',
    request_metting:'yes',
    metting_date:'',
  };
  today:any

  constructor(private modalController:ModalController, private api:ApiService, private other:OtherService, private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
    this.today = new Date().toJSON();
  }

  async presentDateModal() {
    const modal = await this.modalController.create({
      component: DateComponent,
      cssClass: 'my-custom-class',
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.form.metting_date = data;
  }

  employeeAddGrievanceApp(){
    this.form.empId = JSON.parse(localStorage.getItem('userdata') || '{}').id;
    this.api.employeeAddGrievanceApp(this.form).subscribe(res=>{
      this.modalController.dismiss();
      this.other.presentToast(res.body.message,'success');
      this.navCtrl.setDirection('root');
      this.router.navigate(['/menu/home'])
    })
  }

}
