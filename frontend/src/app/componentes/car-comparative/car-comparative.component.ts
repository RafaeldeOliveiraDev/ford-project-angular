import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Carro {
  modelo: string;
  preco: string;
  alturaCacamba: number;
  alturaVeiculo: number;
  alturaSolo: number;
  carga: number;
  motor: number | string;
  potencia: number;
  volumeCacamba: number;
  roda: string;
  imagem: string;
}

@Component({
  selector: 'app-car-comparative',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './car-comparative.component.html',
  styleUrls: ['./car-comparative.component.css']
})
export class CarComparativeComponent {
  carrosParaComparar: Carro[] = [];
  mostrarComparativo = false;

  // Lista de carros disponíveis para comparação
  carros: Carro[] = [
    {
      modelo: 'XL Cabine Simples 2.2 Diesel 4X4 MT 2022',
      preco: 'R$ 183.849',
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      carga: 1234,
      motor: '2.2 Diesel',
      potencia: 160,
      volumeCacamba: 1420,
      roda: 'Aço Estampado 16"',
      imagem: '/img/XL Cabine.jpg' // Caminho corrigido para assets
    },
    {
      modelo: 'XLS 2.2 Diesel 4X4 AT 2022',
      preco: 'R$ 220.689',
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      carga: 1076,
      motor: '2.2 Diesel',
      potencia: 160,
      volumeCacamba: 1180,
      roda: 'Aço Estampado 16"',
      imagem: '/img/xls 2.2 diesel.jpg'
    },
    {
      modelo: 'Storm 3.2 Diesel 4X4 AT 2022',
      preco: 'R$ 222.789',
      alturaCacamba: 511,
      alturaVeiculo: 1821,
      alturaSolo: 232,
      carga: 1040,
      motor: '3.2 Diesel',
      potencia: 200,
      volumeCacamba: 1180,
      roda: 'Liga Leve 17"',
      imagem: '/img/storm.jpg'
    }
  ];

  // Adiciona ou remove carros da comparação
  toggleCarroParaComparar(carro: Carro, event: any): void {
    if (event.target.checked) {
      if (this.carrosParaComparar.length >= 2) {
        event.target.checked = false;
        alert('Selecione no máximo 2 carros para comparar');
        return;
      }
      this.carrosParaComparar.push(carro);
    } else {
      const index = this.carrosParaComparar.findIndex(c => c.modelo === carro.modelo);
      if (index !== -1) {
        this.carrosParaComparar.splice(index, 1);
      }
    }
  }

  // Abre o modal de comparação
  mostrarComparativoModal(): void {
    if (this.carrosParaComparar.length !== 2) {
      alert('Selecione exatamente 2 carros para comparar');
      return;
    }
    this.mostrarComparativo = true;
  }

  // Fecha o modal
  fecharComparativo(): void {
    this.mostrarComparativo = false;
  }
}