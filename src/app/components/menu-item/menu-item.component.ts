import { Router } from '@angular/router';
import { JwtServiceService } from './../../shared/jwt-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor(public jwtService: JwtServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  hasLoggedIn: boolean = false

  isLoggedIn() {
    this.hasLoggedIn = this.jwtService.loggedIn
  }

  getFullname() {
    return this.jwtService.getFullname
  }

  logout() {
   // alert("logout")
    this.jwtService.logout
    this.hasLoggedIn = false;
    this.router.navigate(['/'])
  }

}
