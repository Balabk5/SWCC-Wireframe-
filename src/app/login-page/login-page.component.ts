import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import login from '../login.json';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';

const User = [
  {
      "login_id" : "Ekram",
      "password" : "1234",
      "account_type": "hr"
  },
  {
      "login_id" : "Abbad",
      "password" : "1234",
      "account_type": "admin"
  },
  {
      "login_id" : "Noor",
      "password" : "1234",
      "account_type": "finance"
  },
  {
      "login_id" : "Abbas",
      "password" : "1234",
      "account_type": "admin"
  },
  {
      "login_id" : "Dalia",
      "password" : "1234",
      "account_type": "supply&proc"
  },
  {
      "login_id" : "Ekram",
      "password" : "1234",
      "account_type": "it"
  }
]

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // constructor(){private router = Router}
  

  loginForm = new FormGroup({
    user:new FormControl(''),
    Password:new FormControl(''),
  })

  loginClicked(){
    if (this.loginForm.value.user == "Ekram" && this.loginForm.value.Password=="1234" ) {
      this.router.navigate(['/home']);
    } else if (this.loginForm.value.user == "Abbad" && this.loginForm.value.Password=="1234" ) {
      this.router.navigate(['/homepage']);
    }
    else {
      alert("Invalid Credentials! Please provide correct one.")
    }
  }

}
