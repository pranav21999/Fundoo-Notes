import { Component, OnInit, ViewChild } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute } from '@angular/router';
import {  Output } from '@angular/core';
// import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})

export class CreatenoteComponent implements OnInit {
  fullEdit: boolean = false;
  title='';
  description='';
  isOpen = true;
  token: any;
  
 click() {
  this.isOpen = true;
 }

  constructor(private note: NoteService, private activeRoute: ActivatedRoute) { }
 

  ngOnInit(): void {
  
  }
  addNote(){
    let data = {
      title: this.title,
      description: this.description,
    }
    console.log(data)
    this.token = localStorage.getItem('Token');
    console.log(" add note data ", this.token);
    if (this.title && this.description) {
      this.note.createNote(data).subscribe((response) => {
        console.log(response);
        let message = "note created successfull";
        console.log(message);
      
        this.title = "";
        this.description = "";
    
        this.fullEdit = false;
            
      }, error => {
        console.log("error in register", error);
        
      })
    }
     else {
      this.fullEdit = false;
    }
  }

  
  displayFull() {
    this.fullEdit = true;
  }

}