import { RestApiService } from './shared/rest-api.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servbyte-front';



  @Input() register = {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    city:"",
    email: null,
    password: null,
    role:'RESTAURANT'
  }

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  login() {
    console.log(this.register)
    this.restApi.registerUser(this.register).subscribe((data: {})=>{
      console.log(data)
    })
    alert("You have successfully create an account with us, you will not be redirected to login page")
    this.router.navigate(['/login'])
  }

}
