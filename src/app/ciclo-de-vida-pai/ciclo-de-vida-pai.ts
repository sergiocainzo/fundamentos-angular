import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CicloDeVida } from "../ciclo-de-vida/ciclo-de-vida";

@Component({
  selector: 'app-ciclo-de-vida-pai',
  imports: [CommonModule, FormsModule, CicloDeVida],
  templateUrl: './ciclo-de-vida-pai.html',
  styleUrl: './ciclo-de-vida-pai.scss'
})
export class CicloDeVidaPai {
  texto = "";
}
