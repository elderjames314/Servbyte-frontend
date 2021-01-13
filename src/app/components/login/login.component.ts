
import { JwtServiceService } from './../../shared/jwt-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public restApi: RestApiService,
    public router: Router,
    public jwtService: JwtServiceService
  ) {

  }

  ngOnInit(): void {
  }

  @Input() loginDetails = {
    email: null,
    password: null,
  }

  User = {
    firstName:null,
    lastName:null,
    email:null,
    phoneNumber:null
  }

  login() {
    this.restApi.loginUser(this.loginDetails).subscribe(data=>{
      console.log(data)
      //save token
      this.jwtService.setToken(data.accessToken);
      this.jwtService.setParameters(data.firstName, data.lastName, data.email, data.phoneNumber);

      this.router.navigate(['/menu', data.id])
    })

  }


}
