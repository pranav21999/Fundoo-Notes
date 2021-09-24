import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

//Calling Http Service to the various components

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;
  
  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem('Token');
 
   }

  //return http service to register component
  register(data: any) {
    console.log("given data is", data);
    return this.httpService.postService("/user/userSignUp", data, false, false);
  }

    //return http service to login component
  login(data: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };

    console.log("given data is", data);
    return this.httpService.postService("/user/login", data, false, httpAuthOptions);    
  }

     //return http service to forget password
  forgetpassword(data : any){
    console.log("given data is", data);
    return this.httpService.postService("/user/reset", data, false, false);
  }
     //return http service to reset password
  resetpassword(token : any, data : any){
    console.log("given data is", data);
    return this.httpService.postService("/user/reset-password", data, false, false);
  }

  
}