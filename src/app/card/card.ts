import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule,FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() titulo = "";
  @Input() cor = "#ccc";
}
