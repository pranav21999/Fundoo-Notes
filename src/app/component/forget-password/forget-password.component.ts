import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  ForgetPasswordForm!: FormGroup;
  submitted = false;


  constructor(private fb: FormBuilder, public route: Router, public snackBar: MatSnackBar, private user: UserService) { }

  ngOnInit(): void {
    this.ForgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }



  get f() { return this.ForgetPasswordForm.controls; }

  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0) {
      config.duration = duration;
    }
    this.snackBar.open(message, undefined, config);
  }

  onsubmit() 
  {
    if (this.ForgetPasswordForm.value) {
      this.openSnackBar('Processing', 2000);
      let reqData = {
        email: this.ForgetPasswordForm.value.email
      }
      this.user.forgetpassword(reqData).subscribe(
        (response : any) => {
          this.openSnackBar('Password reset link has been sent to your Email', 1000);
        },
        error => {
          if (error['status'] == 0) {
            this.openSnackBar('Sending password reset link failed: Server offline', 1000);
          }
          else {
            this.openSnackBar('Sending password reset link failed ', 1000);
          }
        });
    }
  }
  // {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.ForgetPasswordForm.invalid) {
  //     console.log("invalid data");
  //     return;
  //   }
  //   else {
  //     console.log("login successful")
  //     let reqData = {
  //       email: this.ForgetPasswordForm.value.email,
  //       password: this.ForgetPasswordForm.value.password,
  //     }
  //     console.log(reqData);

  //   }
  // }


}
