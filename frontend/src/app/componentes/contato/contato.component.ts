import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Output() fechar = new EventEmitter<void>();
  confirmandoEnvio = false; // controle para confirmação


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
    mensagem: '',
  };

   enviarFormulario() {
    if (!this.confirmandoEnvio) {
      this.confirmandoEnvio = true;
      return; // volta para o formulário para confirmação
    }
    
    console.log('Form enviado:', this.form);
    this.fecharFormulario();
    alert("Dados enviados com sucesso!");
    this.confirmandoEnvio = false;
  }

  // função para cancelar o envio
  cancelarEnvio() {
    this.confirmandoEnvio = false;
  }

  fecharFormulario() {
    this.fechar.emit();
  }

  //  função para validar o celular
  validarCelular(celular: string): boolean {
    return /^\d+$/.test(celular);
 }

 constructor(
  public themeService: ThemeService,
 ){}
}
