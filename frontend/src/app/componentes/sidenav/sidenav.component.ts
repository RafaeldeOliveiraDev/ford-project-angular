import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';


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
  constructor(
    private router: Router,
    public themeService: ThemeService,
  ){}

  logout() {
  localStorage.removeItem('usuarioLogado');
  this.router.navigate(['/']);
}

toggleTheme() {
    this.themeService.toggleTheme();
  }
  
}
