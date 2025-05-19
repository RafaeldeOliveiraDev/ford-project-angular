import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Output() fechar = new EventEmitter<void>();

  form = {
    nome: '',
    sobrenome: '',
    tipoPessoa: '',
    email: '',
    celular: '',
    preferencia: '',
    aceiteTermos: false,
    tipoRanger: '',
    tipoMustang: '',
    tipoTerritoy: '',
    tipoBronco: '',

  };

  enviarFormulario() {
    console.log('Form enviado:', this.form);
    this.fecharFormulario();
    alert("Dados enviados com sucesso!");
  }

  fecharFormulario() {
    this.fechar.emit();
  }
}
