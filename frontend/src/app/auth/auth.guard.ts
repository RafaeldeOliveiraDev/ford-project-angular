import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLogado = !!localStorage.getItem('usuarioLogado'); // ou token

  if (isLogado) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
