import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
  ],
  imports: [

    CommonModule,
    MatIconModule,
    MatInputModule
  ],

  exports:[
    MatIconModule,
    MatInputModule
  ]

})
export class MaterialModule { }
