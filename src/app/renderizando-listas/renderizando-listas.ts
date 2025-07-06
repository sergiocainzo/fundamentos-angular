import { Component } from '@angular/core';
import { Celular } from '../types/celular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-renderizando-listas',
  imports: [CommonModule],
  templateUrl: './renderizando-listas.html',
  styleUrl: './renderizando-listas.scss',
})
export class RenderizandoListas {
  celulares: Celular[] = [
    {
      id: 1,
      nome: 'Celular XL',
      descricao: 'Um celular grande.',
      esgotado: false,
    },
    { id: 2, nome: 'Celular Normal', esgotado: false },
    {
      id: 3,
      nome: 'Celular Mini',
      descricao: 'Um celular pequeno.',
      esgotado: true,
    },
  ];
}
