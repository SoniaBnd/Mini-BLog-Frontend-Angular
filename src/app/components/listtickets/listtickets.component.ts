import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auths/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../auths/token.service';
import { AuthStateService } from '../../auths/auth-state.service';

export class Ticket {
  id: number;
  title: String;
  description: String;
}
// User interface
export class User {
   id:number;
  name: String;
  email: String;

}


@Component({
  selector: 'app-listtickets',
  templateUrl: './listtickets.component.html',
  styleUrls: ['./listtickets.component.css']
})
export class ListticketsComponent implements OnInit {

lis=[];
comments=[];
errors = null;
li:any;
Viewtk : Ticket;
tit: String;
desc: String;
isRoute : String;
UserProf: User;
 constructor(
    public router: Router,
    public authService: AuthService,
	private token: TokenService,
    private authState: AuthStateService,
  ) {
	   this.authService.profileUser().subscribe( (data:any) => {
        this.UserProf = data;
		console.log("test data user "+this.UserProf );	
		console.log(Object.getOwnPropertyNames(this.UserProf));
		});
		
	if(this.router.url === '/my-tickets')
	{
		this.isRoute = '/my-tickets';
      this.authService.listmytickets().subscribe( (response: any) => {
        this.lis = response.data;
	  } 
		,
	 error => {
          this.errors = error.error || {};
        },() => {
          this.authState.setAuthState(true);
        }
	);
      
    }else
	{
		this.isRoute = '/tickets';
		this.authService.listtickets().subscribe( (response: any) => {
        this.lis = response.data;
        console.log(this.lis); 		},
	 error => {
          this.errors = error.error || {};
        },() => {
          this.authState.setAuthState(true);
        }
	);
	
	}
  }
  
    showTicket(id:number){
	    this.isRoute = 'show-ticket'; 
	   
	    this.authService.listcomments(id).subscribe( (response) => {
        this.comments = response.data;
		});
	
    return this.authService.showticketurl(id).subscribe( (response) => {
        this.Viewtk = response.data;
	
	 },
	  error => {
          this.errors = error.error || {};
        },() => {
          this.authState.setAuthState(true);
        }
	  ); 
  }
  
  ngOnInit(): void {
  }
  
  deleteTicket(id:number){
    return this.authService.deletemyticket(id).subscribe(
      data => console.log(data),
      error => console.log(error),
	  () => {
		  window.location.reload();
        }
    );
  }
  
  
   deleteComment(id:number){
    return this.authService.deletemycomment(id).subscribe(
      data => console.log(data),
      error => console.log(error),
	  () => {
		  window.location.reload();
        }
    );
  }
   
 
  
 /* onloadtickets(){
	  this.authService.listmytickets().subscribe((data: any[])=>{
      console.log(data);
	  console.log("test");
      this.lis = data;
	  this.responseHandler(data);
    },
	 error => {
          this.errors = error.error || {};
        },() => {
          this.authState.setAuthState(true);
          this.router.navigate(['profile']);
        }
	);
  }*/
  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }

  

}
