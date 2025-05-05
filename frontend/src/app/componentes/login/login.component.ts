import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.senha === '123456') {
      this.router.navigate(['home']);
    } else {
      alert('Usuário ou senha inválidos.');
    }
  }
}