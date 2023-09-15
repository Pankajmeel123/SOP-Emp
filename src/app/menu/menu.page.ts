import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  profile:any;

  constructor() { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('userdata') || '{}');
  }

}
