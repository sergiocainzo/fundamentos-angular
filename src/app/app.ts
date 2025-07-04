import { Component } from '@angular/core';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";
import { SegundoComponente } from "./segundo-componente/segundo-componente";
import { PipeCustomizado } from "./pipe-customizado/pipe-customizado";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponente, SegundoComponente, PipeCustomizado],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'fundamentos-angular';
}
