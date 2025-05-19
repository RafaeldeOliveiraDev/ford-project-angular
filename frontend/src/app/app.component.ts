import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  template: 
  `<router-outlet></router-outlet> `, //tira a necessidade do router-outlet no app.comp.html e deixa principal a parte sidenav
  styles: [],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor() {
  if (!localStorage.getItem('usuarioLogado')) {
    localStorage.setItem('usuarioLogado', 'false'); // força o estado inicial
  }
}
}

// vagas iel para pesquisador - vagas no site da IEL - estagio na ford - vagas na ford brasil lINKEDiN
// GRUPOS DE PESQUISA E EXTE
// DIRETOR ACADEMICO DE CURSO
