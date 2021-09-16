import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';


const routes: Routes = [
  
    { path: "login", component: LoginComponent } ,
    { path: "registration", component: RegistrationComponent },
    { path: "forget-password", component: ForgetPasswordComponent },
    // { path: "reset-password", component: ResetPasswordComponent}
    {path: 'resetpassword/:token', component: ResetPasswordComponent } 
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

