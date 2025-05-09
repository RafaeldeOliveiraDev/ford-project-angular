import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    SidenavComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}

  logout(){
    this.router.navigate(['/login'])
  }
}