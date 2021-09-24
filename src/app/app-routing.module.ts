import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
// import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotesComponent } from './component/notes/notes.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';
import { EditlabelsComponent } from './component/editlabels/editlabels.component';
import { CreatenoteComponent } from './component/createnote/createnote.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  { path: 'createnote', component: CreatenoteComponent },


  
  { path: 'dashboard', component: DashboardComponent,
    children:
     [
      { path: 'notes', component: NotesComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'editlabels', component: EditlabelsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }