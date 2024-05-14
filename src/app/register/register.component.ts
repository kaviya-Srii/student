import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl,FormGroup } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(){

  }
  ngOnInit():void{

  }
  user_records:any[]=[];
  data={
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }
  doRegistration(Values: any) {
    // this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_records.some((v)=> {
      return v.email==this.data.email
    })) {
      alert("Duplicate Data");
    }
    else {
      this.user_records.push(this.data)
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("Hi " +this.data.name+ " you are successfully registerd");
    }
  }
}
