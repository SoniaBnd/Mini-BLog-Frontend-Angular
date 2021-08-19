import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';

// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

export class Ticket {
  title: String;
  description: String;
}

export class Comment {
  comment: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
   // User registration
  register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }
  
    // User Add Ticket
  addticket(ticket: Ticket): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/tickets', ticket);
  }
  
    // User list all Ticket
  listtickets(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/tickets');
  }
   // User Add Comment
  addcomment(id:String, comment: Comment): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/comments/'+id, comment);
  }
  
    // User list  comments
  listcomments(id:number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/comments/'+id);
  }
  
   // User show detail Ticket
  showticketurl(id:number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/tickets/'+id);
  }
  
    // User show list my Tickets
  listmytickets(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/my-tickets');
  }
  
     // User Delete Ticket
  deletemyticket(id:number): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/auth/tickets/'+id);
  }
      // User Delete Comment
  deletemycomment(id:number): Observable<any> {
    return this.http.delete('http://127.0.0.1:8000/api/auth/comments/'+id);
  }
  
}
