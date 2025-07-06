import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Logger } from '../logger';

@Component({
  selector: 'app-exemplo-servicos1',
  imports: [CommonModule,FormsModule],
  templateUrl: './exemplo-servicos1.html',
  styleUrl: './exemplo-servicos1.scss'
})
export class ExemploServicos1 {
  nome = "";

  constructor(private logger:Logger){

  }

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome}, foi adicionado.`);
  }
}
