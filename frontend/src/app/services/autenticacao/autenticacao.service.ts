import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private apiUrl = 'http://localhost:3000/user/login';

  constructor(private http: HttpClient) {}

   // serviço de autenticação
  autenticar(usuario: string, senha: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, {
    
      //  criação do método para usar no componente. BackEnd espera objetos que contenha esses atributos abaixo. Então, mapeamos usuario e senha
      userName: usuario,
      password: senha
    });
  }
}