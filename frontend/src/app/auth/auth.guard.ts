import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado === 'true') {
      return true;
    }

    alert('Você precisa estar logado para acessar esta página');
    this.router.navigate(['/login']);
    return false;
  }
}
