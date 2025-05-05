import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(){}
  
  ngOnInit(): void {} 

  login(){
    console.log(this.usuario, this.senha)
    }
}
