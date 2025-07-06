import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule,FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss'
})
export class DataBinding {
  dados = "";
}
