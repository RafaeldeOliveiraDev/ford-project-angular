import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
// vagas iel para pesquisador - vagas no site da IEL - estagio na ford - vagas na ford brasil lINKEDiN
// GRUPOS DE PESQUISA E EXTE 
// DIRETOR ACADEMICO DE CURSO