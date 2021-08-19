import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { AuthService } from './../../auths/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../auths/token.service';
import { AuthStateService } from '../../auths/auth-state.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Ticket {
  title: String;
  description: String;
}
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}
@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  
   ticket: Ticket;
   user: User;
   commentForm: FormGroup;
   errors = null;
  ticketId: String;
  filter$: Observable<string>;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
	private _activatedRoute: ActivatedRoute,
	
  ) {
	   this.ticketId = this._activatedRoute.snapshot.params.ticketId;
    this.commentForm = this.fb.group({
      comment!: [],	
      ticket_id!: [],	
    });
	 
  }
  
 
  

  ngOnInit() {
  
  }
  
     onSubmitcomment() {
	  
      this.authService.addcomment( this.ticketId,this.commentForm.value ).subscribe(
        result => {
          // this.responseHandler(result);
		  console.log(result);
		  this.authState.setAuthState(true);
        },
        error => {
          this.errors = error.error || {};
        },() => {
           this.authState.setAuthState(true);
          this.commentForm.reset();
		  // this.router.navigate(['profile']);
          this.router.navigate(['tickets']);
        }
      );
  }
    // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }

}
