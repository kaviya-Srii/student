import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      RouterOutlet,
      NavbarComponent,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      CommonModule
    ]
})
export class AppComponent {
  title = 'student';
authService: any;
  constructor(private router:Router) {

  }
  homeBtn() {
    this.router.navigate(['/home'])
  }
}
