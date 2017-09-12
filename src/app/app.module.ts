import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { ApiService } from './Services/API.service'

import { AppComponent } from './AppComponents/app.component';
import { UsersComponent } from './AppComponents/User/User.list.component';
import { UserComponent } from './AppComponents/User/User.component';
import { GroupsComponent } from './AppComponents/Group/Group.list.component';
import { UserDialogComponent } from './AppComponents/User/User.dialog.component'
import { GroupDialogComponent } from './AppComponents/Group/Group.dialog.component'
import { ParticipantsDialogComponent } from './AppComponents/Group/Participants.dialog.component'
import { GroupComponent } from './AppComponents/Group/Group.component'


const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'group/:id', component: GroupComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GroupsComponent,
    UserComponent,
    ParticipantsDialogComponent,
    GroupDialogComponent,
    GroupComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
