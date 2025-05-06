import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service';

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

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  login() {
    if (!this.usuario || !this.senha) return;

    this.authService.autenticar(this.usuario, this.senha).subscribe(
        ({ token }) => {
          // salva o token e navega
          localStorage.setItem('token', token);
          this.router.navigate(['home']);
        },
        error => {
          alert('Usuário ou senha inválidos');
          console.error(error);
        }
      );
  }
}