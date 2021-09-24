import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
//  import {Routes} from '@angular/router';
//  import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NotesComponent } from './component/notes/notes.component';
import { RemindersComponent } from './component/reminders/reminders.component';
import { EditlabelsComponent } from './component/editlabels/editlabels.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component'; 
// const appRoutes:Routes = [  
  // { path: "login", component: LoginComponent } ,
  // { path: "registration", component: RegistrationComponent } 

// ];
import {MaterialModule} from './material/material.module';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { FormsModule } from '@angular/forms';
import { DisplaynoteComponent } from './component/displaynote/displaynote.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NotesComponent,
    RemindersComponent,
    EditlabelsComponent,
    ArchiveComponent,
    TrashComponent,
    CreatenoteComponent,
    DisplaynoteComponent,
  ],
  imports: [
    FormsModule,
    MaterialModule,
    MatListModule,
    BrowserModule,
    MatMenuModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSidenavModule ,
    // RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
