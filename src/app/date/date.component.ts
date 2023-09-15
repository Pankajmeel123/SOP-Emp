import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent  implements OnInit {

  today:any;

  constructor(private modalController:ModalController) { }

  ngOnInit() {
    this.today = new Date().toJSON();
  }

  sendChange(e:any){
    console.log(e.detail.value);
    this.modalController.dismiss(e.detail.value)
  }

}
