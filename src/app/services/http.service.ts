import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

//Http post Request for backend-server
export class HttpService {
  BaseUrl=environment.BaseUrl;
  token : any;

  constructor(private http: HttpClient) { }
  // Post(url: any, data: any, token: any, headers: boolean){
  //   // this.token = localStorage.getItem('Token');
  //   let options = {
  //     headers: new HttpHeaders({
  //         'Authorization': this.token,
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.http.post(this.BaseUrl + url, data,options);
  // }


  postService( url: string = '',payload: any = null, tokenRequired: boolean = false, httpOptions:any=null) {
    /* handles post operations
      params : id  : id of question or comment to add/post,
      apiendpoint : endpoint i.e 'comments/' , 'answers/', 'editquestions/'
  */
    return this.http.post(this.BaseUrl+url, payload, tokenRequired && httpOptions);
  }

  // Get(url: any, data: any, token: any, headers: boolean)
  // {
  //    return this.http.get(this.BaseUrl + url, data);
  //  }
  
  // Put(url: any, data: any, token: any, headers: boolean)
  // {
  //   return this.http.put(this.BaseUrl + url, data);
  // }
}