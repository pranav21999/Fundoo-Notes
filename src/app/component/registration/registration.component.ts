import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  //adding colour to fundoo
  fontcolors = ['color:#800080', 'color:#FBBC04', 'color:#f28b82', 'color:#fbbc04', 'color:#fff475']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o']
  RegistrationForm!: FormGroup;
  submitted = false;

  hide: boolean = false;
  constructor(private fb: FormBuilder, private user: UserService, public snackBar: MatSnackBar, ) { }
  //validations for form fields
  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]], 
      service: ['advance', Validators.required]
    })
  }
  // get f() { return this.RegistrationForm.controls; }

  onRegistration() {
    console.log("onSubmit method is calling", this.RegistrationForm.value)
    if (this.RegistrationForm.invalid) {
      console.log("Its invalid Form");
      return;
    }

    else 
    {
      console.log(" it is valid")
      let data = {
        "email": this.RegistrationForm.controls.email.value,
        "lastName": this.RegistrationForm.controls.firstName.value,
        "firstName": this.RegistrationForm.controls.lastName.value,
        "password": this.RegistrationForm.controls.password.value,
        "confirmpassword": this.RegistrationForm.controls.confirmpassword.value,
        "service": this.RegistrationForm.controls.service.value
      }

      this.user.register(data).subscribe(response => {
        console.log(response);
        this.snackBar.open("Registered!!!", " ", { duration: 2000 });
      },      
       error => {
       console.log("error in Registration", error);
        this.snackBar.open("Registration Failed!!", " ", { duration: 2000 });
         });


      // console.log(data);
      // if (!this.RegistrationForm.valid) {
      //   return;
      // }
      // console.log(this.RegistrationForm.value);
      // }
    }
  }
}