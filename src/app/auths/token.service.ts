import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private issuer = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    register: 'http://127.0.0.1:8000/api/auth/register'
  }
public loginid ;
  constructor() { 
    this.loginid=this.getToken();
  }
  
  handleData(token){
    localStorage.setItem('auth_token', token);
  }
   handleDatauser(user){
    localStorage.setItem('user_data', user);
  }

  getToken(){
    return localStorage.getItem('auth_token');
  }
  
   getUser(){
    return localStorage.getItem('user_data');
  }

  
  // Verify the token
  isValidToken(){
     const token = this.getToken();

     if(token){
       const payload = this.payload(token);
       if(payload){
         return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
       }
	   else  return false; 
     } else {
		  return false;
     }
  }
  
   payload(token) {
    const jwtPayload = token.split('.')[1];
	console.log(token);
    // return JSON.parse(atob(jwtPayload));
	
	 try {
        return JSON.parse(atob(jwtPayload));
    } catch (e) {
        console.log("error decoding token");
    }
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken(){
    localStorage.removeItem('auth_token');
  }
  
}
