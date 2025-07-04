import { Component } from '@angular/core';
import { MultiplicaPorPipe } from '../multiplica-por-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipe-customizado',
  imports: [CommonModule,MultiplicaPorPipe],
  templateUrl: './pipe-customizado.html',
  styleUrl: './pipe-customizado.scss'
})
export class PipeCustomizado {

}
