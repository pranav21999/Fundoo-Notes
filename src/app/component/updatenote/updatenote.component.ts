import { Component, Inject, OnInit } from '@angular/core';
import {NoteService} from 'src/app/services/note.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

