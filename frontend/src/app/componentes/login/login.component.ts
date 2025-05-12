import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
    // Checa se os campos estão preenchidos
    if (!this.usuario || !this.senha) {
      alert('Preencha o usuário e a senha');
      return;
    }

    // Chama o serviço de autenticação
    this.authService.autenticar(this.usuario, this.senha).subscribe({
      next: (res) => {
        
        // Redireciona pra página inicial
        this.router.navigate(['home']);
      },
      error: (err) => {
       
        // Mostra erro simples pro usuário
        alert('Usuário ou senha inválidos');

        // Loga erro no console pra facilitar debug
        console.error('Erro no login:', err);
      }
    });
  }
}
