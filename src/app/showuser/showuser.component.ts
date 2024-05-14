import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showuser',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './showuser.component.html',
  styleUrl: './showuser.component.css'
})
export class ShowuserComponent {

  user_records:any[]=[];
  data={
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }

  constructor() {
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}')
  }
}
