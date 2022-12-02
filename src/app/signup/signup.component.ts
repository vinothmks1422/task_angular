import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  submitted() {
    window.alert('your account successfully created and please login');
  }
}
