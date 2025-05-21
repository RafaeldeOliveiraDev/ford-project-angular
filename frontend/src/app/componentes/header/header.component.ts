import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private router: Router, 
    public themeService: ThemeService) {}

    logout() {
  localStorage.removeItem('usuarioLogado');
  this.router.navigate(['/']);
}

 toggleTheme() {
    this.themeService.toggleTheme();
  }

}
