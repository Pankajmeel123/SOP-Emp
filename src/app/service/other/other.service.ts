import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor(private toastController:ToastController, private loadingCtrl:LoadingController) { }

  async presentToast(msg:string,colr:string="dark") {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      color:colr
    });
    await toast.present();
  }

  async showLoading(msg: any) {
    return await this.loadingCtrl.create({
      message: msg,
    });
    // return loading.present();
  }
}
