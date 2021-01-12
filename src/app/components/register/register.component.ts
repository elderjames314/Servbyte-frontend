import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  ngOnInit(): void {
  }

  @Input() registerDetails = {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    city:'LAGOS',
    email: null,
    password: null,
    role:'RESTAURANT'
  }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {

  }



  register() {
    console.log(this.registerDetails)
    this.restApi.registerUser(this.registerDetails).subscribe((data: {})=>{
      console.log(data)
    })
    alert("You have successfully create an account with us, you will not be redirected to login page")
    this.router.navigate(['/login'])
  }

}
