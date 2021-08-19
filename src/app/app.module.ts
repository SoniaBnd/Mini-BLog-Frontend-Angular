import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { RouterModule, Routes  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './auths/auth.interceptor';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddticketComponent } from './components/addticket/addticket.component';
import { ListticketsComponent } from './components/listtickets/listtickets.component';
import { AddcommentComponent } from './components/addcomment/addcomment.component';
import { ListcommentsComponent } from './components/listcomments/listcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    AddticketComponent,
    ListticketsComponent,
    AddcommentComponent,
    ListcommentsComponent
  ],
  imports: [
    BrowserModule,
	// RouterModule.forRoot([]),
	HttpClientModule,
	ReactiveFormsModule,
    FormsModule,
	AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
