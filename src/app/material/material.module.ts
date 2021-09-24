import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    
  ],
  imports: [
    FontAwesomeModule ,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
  ],

  exports:[
    FontAwesomeModule ,
    MatIconModule,
    MatInputModule,
    MatExpansionModule
  ]

})
export class MaterialModule { }
