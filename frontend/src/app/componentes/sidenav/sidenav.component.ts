import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  isOpen = false;

  toggle(){
      this.isOpen = !this.isOpen
  }
  constructor(private router: Router){}

  logout() {
  localStorage.setItem('usuarioLogado', 'false');
  this.router.navigate(['/login']);
  }
}
