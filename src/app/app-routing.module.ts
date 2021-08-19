import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddticketComponent } from './components/addticket/addticket.component';
import { ListticketsComponent } from './components/listtickets/listtickets.component';
import { AddcommentComponent } from './components/addcomment/addcomment.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'addticket', component: AddticketComponent },
  { path: 'addcomment/:ticketId', component: AddcommentComponent },
  { path: 'my-tickets', component: ListticketsComponent },
  { path: 'tickets', component: ListticketsComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }