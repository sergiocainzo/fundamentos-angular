import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Logger } from '../logger';

@Component({
  selector: 'app-exemplo-servicos2',
  imports: [CommonModule, FormsModule],
  templateUrl: './exemplo-servicos2.html',
  styleUrl: './exemplo-servicos2.scss',
})
export class ExemploServicos2 {
  descricao = '';

  constructor(public logger: Logger) {}

  adicionarProduto() {
    this.logger.logar(`O produto: ${this.descricao}, foi adicionado.`);
  }
}
