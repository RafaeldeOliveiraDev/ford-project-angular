import { Component, OnInit, inject } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CardComponent } from '../card/card.component';
import { CarTableComponent } from '../car-table/car-table.component';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { Veiculo } from '../../models/car';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidenavComponent, CardComponent, CarTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  dashboardService = inject(DashboardService)

  veiculos: Veiculo[] = [];
  veiculoSelecionado: Veiculo = {
    id: -1,
    vehicle: '',
    volumeTotal: 0,
    connected: 0,
    softwareUpdates: 0,
    vin: '',
    img: ''
  }

  ngOnInit() {
    this.dashboardService.getVeiculos().subscribe({
      error: () => {},
      next: (veiculos) => {
        this.veiculos = Object.values(veiculos) as Veiculo[];
        this.veiculoSelecionado = veiculos[0]
      }
    })
  }

}
