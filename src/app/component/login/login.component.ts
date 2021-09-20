import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;

  hide: boolean = false;

  constructor(private fb: FormBuilder, private user: UserService, public route: Router) {
  }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required]
    })
  }

  //validation for login from fields

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    //  name: ['', [Validators.required, Validators.minLength(3)]],

  })

  get f() { return this.loginForm.controls; }  
  onLogin() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("invalid data");
      return; 
    }
    else {
      console.log("login successful")
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.user.login(reqData).subscribe
        (
          (response: any) => {
            localStorage.setItem('Token', response['id']);
            console.log(response);
            this.route.navigate(['dashboard']);
          }
          
        );
    }
  }
}