import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService {
  private apiUrl = 'http://localhost:3001/login';

  constructor(private http: HttpClient) {}

   // serviço de autenticação
  autenticar(usuario: string, senha: string): Observable<any> {

  return this.http.post(this.apiUrl, {
    
    //  criação do método para usar no componente. BackEnd espera objetos que contenha esses atributos abaixo. Então, mapeamos usuario e senha
    nome: usuario,
    senha: senha
  });
}

isLogado(): boolean {
  return localStorage.getItem('usuarioLogado') === 'true';
}
}