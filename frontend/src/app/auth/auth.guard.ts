// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const estaLogado = localStorage.getItem('usuarioLogado') === 'true';

    if (!estaLogado) {
      alert('Você precisa estar autenticado para acessar esta página.');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
