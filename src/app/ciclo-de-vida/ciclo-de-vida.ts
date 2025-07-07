import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  imports: [CommonModule],
  templateUrl: './ciclo-de-vida.html',
  styleUrl: './ciclo-de-vida.scss',
})
export class CicloDeVida implements OnInit, OnChanges,OnDestroy {
  horario = new Date();
  timer: any = null!;

  @Input() texto = "";

  ngOnInit(): void {
    console.log("O evento onInite disparou");
    this.timer = setInterval(() => this.horario = new Date(), 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  ngOnDestroy(): void {
      clearInterval(this.timer);
  }
}
