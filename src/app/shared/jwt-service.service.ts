import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  get getToken() {
    return localStorage.getItem("token");
  }

  get logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("phoneNumber");
    return 1;
  }
  get loggedIn(): boolean{
    return localStorage.getItem('token') !==  null;

  }
  setParameters(firstName: string, lastName:string, email:string, phoneNumber:string) {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email)
    localStorage.setItem('phoneNumber', phoneNumber);
  }

  get getFullname(): any {
    return localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");
  }

}
