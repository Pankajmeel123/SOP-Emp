import { Component, OnInit } from '@angular/core';
import { DateComponent } from '../date/date.component';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.page.html',
  styleUrls: ['./employees-add.page.scss'],
})
export class EmployeesAddPage implements OnInit {

  form = {
    datetimeIn:'',
    shiftTime:'',
    empId:'',
  };
  time:any;
  timing = [
    {
      key :'7 AM',
      value:'07:00:00.000Z'  
    },
    {
      key :'8 AM',
      value:'08:00:00.000Z'  
    },
    {
      key :'9 AM',
      value:'09:00:00.000Z'  
    },
    {
      key :'10 AM',
      value:'10:00:00.000Z'  
    },
    {
      key :'11 AM',
      value:'11:00:00.000Z'  
    },
    {
      key :'12 Noon',
      value:'12:00:00.000Z'  
    },
    {
      key :'1 PM',
      value:'13:00:00.000Z'  
    },
    {
      key :'2 PM',
      value:'14:00:00.000Z'  
    },
    {
      key :'3 PM',
      value:'15:00:00.000Z'  
    },
    {
      key :'4 PM',
      value:'16:00:00.000Z'  
    },
    {
      key :'5 PM',
      value:'17:00:00.000Z'  
    },
  ];

  constructor(private modalController:ModalController, private api:ApiService) { }

  ngOnInit() {
    this.form.datetimeIn = new Date().toJSON().split('T')[0];
    console.log(this.form);
  }

  employeeAddAvailabilityApp(){
    this.form.empId = JSON.parse(localStorage.getItem('userdata') || '{}').id;
    this.form.datetimeIn = this.form.datetimeIn+'T'+this.time;
    console.log(this.form);
    this.api.employeeAddAvailabilityApp(this.form).subscribe(res=>{
      this.modalController.dismiss();
    })
  }

  async presentAvailabilityModal() {
    const modal = await this.modalController.create({
      component: DateComponent,
      cssClass: 'my-custom-class',
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.form.datetimeIn = data.split('T')[0];
    console.log(data);
  }

}
