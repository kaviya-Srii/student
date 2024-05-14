import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router:Router){

  }
  user_records:any[]=[];
  data={
    email:"",
    password:""
  }
  doLogin(values: any) {
    this.user_records=JSON.parse(localStorage.getItem("users")||'{}');
    if(this.user_records.some((v) => {
      return v.email==this.data.email && v.password==this.data.password
    })){
      alert("Login Successful");
      this.router.navigate(['/showuser']);
    }
    else {
      alert("Login Failed");
    }
  }
}
