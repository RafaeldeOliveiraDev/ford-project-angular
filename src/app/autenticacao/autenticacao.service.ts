import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  // serviço de autenticação
  autenticar(usuario: string, senha: string): Observable<any>{
    // retorna o objetvo que estiver definido aqui dentro
    return this.httpClient.post('http://localhost:3000/user/login', {
    //  criação do método para usar no componente
      userName: usuario,
      password: senha,
    })
  }
}
