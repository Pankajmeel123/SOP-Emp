import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { OtherService } from '../service/other/other.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = {
    username:'',
    password:''
  }

  constructor(private api:ApiService, private router:Router, private navCtrl: NavController, private other:OtherService) { }

  ngOnInit() {
  }

  loginApp(){
    this.api.loginApp(this.form).subscribe(res=>{
      if(!res.body.error){
        this.other.presentToast(res.body.message, 'success');
        this.navCtrl.setDirection('root');
        localStorage.setItem('userdata',JSON.stringify(res.body.data));
        this.router.navigate(['/menu/home'], {replaceUrl:true});
      }else{
        this.other.presentToast(res.body.message, 'danger');
      }
    })
  }

}
