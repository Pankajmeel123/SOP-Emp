import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  profile:any;

  constructor(private router:Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('userdata') || '{}');
  }

  logout(){
    this.navCtrl.setDirection('root');
    this.router.navigate(['/login'])
    localStorage.clear();
  }

}
