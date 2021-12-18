import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 name= localStorage.getItem('talan_userName');
 email= localStorage.getItem('talan_userEmail');
 role= localStorage.getItem('talan_userRole');
  constructor() { }

  ngOnInit(): void {
  }

}
