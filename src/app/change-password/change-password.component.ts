import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { OtherService } from '../service/other/other.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent  implements OnInit {

  state:string = 'request';
  @Input() isFirst:any;
  form = {
    otp:''
  };
  form1 = {
    password:'',
    cpassword:''
  }

  constructor(private api:ApiService, private other:OtherService, private modalController:ModalController) { }

  ngOnInit() {
    console.log(this.isFirst)
  }

  submitOtp(){
    let data = {
      empId: JSON.parse(localStorage.getItem('userdata') || '{}').id,
      otp: this.form.otp
    }
    this.api.employeeCheckPasswordOtpApp(data).subscribe(res=>{
      if(!res.body.error){
        this.state = 'password'
      }else{
        this.other.presentToast(res.body.message, 'danger');
      }
    })
  }

  requestOtp(){
    console.log(this.isFirst)
    this.api.employeeSendPasswordOtpApp({empId:JSON.parse(localStorage.getItem('userdata') || '{}').id}).subscribe(res=>{
      if(!res.body.error){
        this.state = 'otp'
      }else{
        this.other.presentToast('Something went wrong !!', 'danger');
      }
    })
  }

  submit(){
    if(this.form1.password == this.form1.cpassword){
      let data = {
        empId: JSON.parse(localStorage.getItem('userdata') || '{}').id,
        password: this.form1.password
      }
      this.api.employeeUpdatePasswordApp(data).subscribe(res=>{
        if(!res.body.error){
          this.other.presentToast('Password Updated !!', 'success');
          this.modalController.dismiss();
        }else{
          this.other.presentToast('Something went wrong !!', 'danger');
        }
      })
    }else{
      this.other.presentToast('Password doesn\'t match !!', 'danger');
    }
  }

}
