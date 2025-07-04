import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  imports: [CommonModule],
  templateUrl: './segundo-componente.html',
  styleUrl: './segundo-componente.scss'
})
export class SegundoComponente {
  nome = "Sergio";
  dataNascimento ="1989-07-04";
  urlImagem ="game-over.jpg";

  exibir(){
    alert(`A data de nascimento é: ${this.dataNascimento}`);
  }
}
