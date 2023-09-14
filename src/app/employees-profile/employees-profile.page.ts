import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-profile',
  templateUrl: './employees-profile.page.html',
  styleUrls: ['./employees-profile.page.scss'],
})
export class EmployeesProfilePage implements OnInit {

  profile:any;

  constructor() { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('userdata') || '{}');
    console.log(this.profile)
  }

}
