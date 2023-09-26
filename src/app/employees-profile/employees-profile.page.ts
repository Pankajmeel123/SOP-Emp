import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../service/api/api.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-employees-profile',
  templateUrl: './employees-profile.page.html',
  styleUrls: ['./employees-profile.page.scss'],
})
export class EmployeesProfilePage implements OnInit {

  profile:any;

  constructor(private modalController:ModalController, private api:ApiService) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('userdata') || '{}');
    console.log(this.profile)
  }

  async presentChangePasswordModal() {
    const modal = await this.modalController.create({
      component: ChangePasswordComponent,
      cssClass: 'my-custom-class',
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    // this.form.datetimeIn = data.split('T')[0];
    console.log(data);
  }

}
