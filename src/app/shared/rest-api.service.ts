import { JwtServiceService } from './jwt-service.service';
import { Loginuser } from './loginuser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Define API
  apiURL = 'http://localhost:9192';
  jwt = '';

  constructor(private http: HttpClient, private jwtServiceService: JwtServiceService) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

      // Http Options Authentication with JWT
      httpOptionsJWT = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ this.jwtServiceService.getToken
        })
      }

    // HttpClient API post() method => Register user
    registerUser(user: any): Observable<User> {
      return this.http.post<User>(this.apiURL+'/users', JSON.stringify(user), this.httpOptions)
      // .pipe(
      //   retry(1),
      //   catchError(this.handleError)
      // )
    }

    //HttpClient API POST method => Log user in and SAVE JWT in Localstorage
    loginUser(loginUser: any): Observable<Loginuser> {
      return this.http.post<User>(this.apiURL+'/users/auth', JSON.stringify(loginUser), this.httpOptions)
      .pipe(
        retry(1), catchError(this.handleError)
      )
    }

   // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    console.log(errorMessage)
    return throwError(errorMessage);
 }
}
