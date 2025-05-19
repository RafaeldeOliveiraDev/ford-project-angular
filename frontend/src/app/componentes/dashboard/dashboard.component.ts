import { Component, OnInit, inject, Signal, signal, computed, effect } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, filter, switchMap, catchError, of } from 'rxjs';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { Veiculo, VinInfos } from '../../models/car';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CardComponent } from '../card/card.component';
import { CarTableComponent } from '../car-table/car-table.component';
import { HeaderComponent } from '../header/header.component';
import { ContatoComponent } from '../contato/contato.component';
import { AutenticacaoService } from '../../services/autenticacao/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SidenavComponent,
    CardComponent,
    CarTableComponent,
    HeaderComponent,
    ContatoComponent,
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dashboardService = inject(DashboardService);

  veiculos: Veiculo[] = [];
  veiculoSelecionado: Veiculo = {
    id: -1,
    vehicle: '',
    volumetotal: 0,
    connected: 0,
    softwareUpdates: 0,
    vin: '',
    img: ''
  };

  vinInfos: VinInfos = {
    id: -1,
    lat: 0,
    long: 0,
    nivelCombustivel: 0,
    odometro: 0,
    status: ''
  };

  vinControl = new FormControl<string | null>('');
  vinNotFound = false;

  ngOnInit() {
    this.dashboardService.getVeiculos().subscribe({
      next: (veiculos) => {
        this.veiculos = Object.values(veiculos);
        this.veiculoSelecionado = this.veiculos[0];

        this.buscarVinInfos(this.veiculoSelecionado.vin);
      },
      error: () => {}
    });

    // RxJS: VIN digitado
    this.vinControl.valueChanges.pipe(
  debounceTime(400),
  filter((vin): vin is string => !!vin && vin.length >= 10),
  distinctUntilChanged(),
  switchMap(vin =>
    this.dashboardService.getVinInfos(vin).pipe(
      catchError(() => {
        this.vinNotFound = true;
        return of(null);
      })
    )
  )
).subscribe((vinInfos) => {
  if (vinInfos) {
  this.vinInfos = vinInfos;
  this.vinNotFound = false;

  const encontrado = this.veiculos.find(v => v.vin === this.vinControl.value);

  this.veiculoSelecionado = encontrado ?? {
    id: -1,
    vehicle: 'VIN Manual',
    volumetotal: 0,
    connected: 0,
    softwareUpdates: 0,
    vin: this.vinControl.value ?? '',
    img: ''
  };

  this.vinControl.setValue('');
}
});
  this.mostrarContato = false;
  }

  onChangeSelect(event: Event) {
    const id = Number((event.target as HTMLSelectElement).value);
    const veiculo = this.veiculos.find((v) => v.id === id);

    if (veiculo) {
      this.veiculoSelecionado = veiculo;
      this.buscarVinInfos(veiculo.vin);
    }
  }

  private buscarVinInfos(vin: string) {
    this.dashboardService.getVinInfos(vin).subscribe({
      next: (vinInfos) => {
        this.vinInfos = vinInfos;
      },
      error: () => {}
    });
  }

  // condição exercida para exibir o contato ao click. Inicialmente como falso (nao mostra)
  mostrarContato = false;

  // para autenticar e verificar se o usuário está logado por meio do inject
  constructor(
    private router: Router,
    private authService: AutenticacaoService
  ) {}




}
