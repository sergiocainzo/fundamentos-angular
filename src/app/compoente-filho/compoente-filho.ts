import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compoente-filho',
  imports: [CommonModule,FormsModule],
  templateUrl: './compoente-filho.html',
  styleUrl: './compoente-filho.scss'
})
export class CompoenteFilho {

  @Input() sobrenome="";
  @Output() mostraNome = new EventEmitter();

  nome = "";

}
