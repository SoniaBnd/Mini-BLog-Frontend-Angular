import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auths/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../auths/token.service';
import { AuthStateService } from '../../auths/auth-state.service';


@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.css']
})
export class AddticketComponent implements OnInit {

 ticketForm: FormGroup;
  errors = null;
 

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.ticketForm = this.fb.group({
      title!: [],
      description!: []
    })
  }



  ngOnInit() { }

 
   onSubmitticket() {
	  
      this.authService.addticket(this.ticketForm.value).subscribe(
        result => {
          // this.responseHandler(result);
		  console.log(result);
		  this.authState.setAuthState(true);
        },
        error => {
          this.errors = error.error || {};
        },() => {
           this.authState.setAuthState(true);
          this.ticketForm.reset();
		  // this.router.navigate(['profile']);
          this.router.navigate(['my-tickets']);
        }
      );
  }
    // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }



}

