import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // permite exibir textos, títulos, dados diferentes
  @Input() titulo: string = '';
  @Input() valor: number = 0;
}
