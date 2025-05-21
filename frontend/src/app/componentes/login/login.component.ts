import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {
    this.loginForm = this.fb.group(
      {
        usuario: ['', [Validators.required]],
        senha: ['', [Validators.required]],
        confirmarSenha: ['', [Validators.required]],
      },
      {
        validators: this.senhasIguaisValidator
      }
    );
  }

  senhasIguaisValidator(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmar = group.get('confirmarSenha')?.value;
    return senha === confirmar ? null : { senhasDiferentes: true };
  }

  login() {
    if (this.loginForm.invalid) {
      if (this.loginForm.errors?.['senhasDiferentes']) {
        alert('As senhas não coincidem.');
      } else {
        alert('Preencha todos os campos obrigatórios.');
      }
      return;
    }

    const { usuario, senha } = this.loginForm.value;

    this.authService.autenticar(usuario, senha).subscribe({
      next: (res) => {
        localStorage.setItem('usuarioLogado', 'true');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert('Usuário ou senha inválidos');
        console.error('Erro no login:', err);
      }
    });
  }
}
