import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

//Calling Http Service to the various components

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  //return http service to register component
  register(data: any) {
    console.log("given data is", data);
    return this.httpService.Post("/user/userSignUp", data, null, false);
  }

    //return http service to login component
  login(data: any) {
    console.log("given data is", data);
    return this.httpService.Post("/user/login", data, null, false);
  }

     //return http service to forget password
  forgetpassword(data : any){
    console.log("given data is", data);
    return this.httpService.Post("/user/reset", data, null, false);
  }
  resetpassword(token : any, data : any){
    console.log("given data is", data);
    return this.httpService.Post("/user/reset-password", data, null, false);
  }

  

}