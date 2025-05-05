import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  usuario = '';
  senha = '';

  constructor(){}
  
  ngOnInit(): void {} 

  login(){
    console.log(this.usuario, this.senha)
  }
}
