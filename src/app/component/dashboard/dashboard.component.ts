import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // isExpandable: boolean = false;
  fontcolors = ['color:#800080', 'color:#FBBC04', 'color:#f28b82', 'color:#fbbc04', 'color:#fff475'];
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o'];
  submitted = false;

  opened =true;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.opened = !this.opened;
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}