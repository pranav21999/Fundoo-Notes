import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
 import { Observable } from 'rxjs';
//  import {tap} from 'rxjs/operators';
// import {tap} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private refresh = new Subject<void>();
  
token:any;  
  constructor(private http: HttpService) { 
    this.token=localStorage.getItem('Token');
  }  
  
  url = environment.BaseUrl;

  // createNote(token: any, data: any) {
  //   return this.http.Post('notes/addNotes', data, token, true);

  // }


  createNote(data: any): Observable<any> {
    console.log(data,this.token);
    
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.postService('/notes/addNotes',data, true, httpAuthOptions);
  }

  getAllNotes(): Observable<any> {
    console.log(this.token);
    
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    return this.http.getService('/notes/getNotesList', true, httpAuthOptions);
  }

  updateNoteService(data:any){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    return this.http.postService(this.url + '/notes/updateNotes',data, true, httpAuthOptions);

  }

}

