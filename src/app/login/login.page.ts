import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';
import { Router } from '@angular/router';

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

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit() {
  }

  loginApp(){
    this.api.loginApp(this.form).subscribe(res=>{
      localStorage.setItem('userdata',JSON.stringify(res.body.data));
      this.router.navigate(['/menu/home'], {replaceUrl:true});
    })
  }

}
