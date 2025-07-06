import { Component } from '@angular/core';
import { CompoenteFilho } from "../compoente-filho/compoente-filho";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compoente-pai',
  imports: [CompoenteFilho,CommonModule],
  templateUrl: './compoente-pai.html',
  styleUrl: './compoente-pai.scss'
})
export class CompoentePai {
  sobrenome = "Cainzo";

  
  monstrarNomeCompleto(nomeCompleto: any){
    alert(`O nome completo: ${nomeCompleto}`);
  }
}
