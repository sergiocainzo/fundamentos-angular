import { Component } from '@angular/core';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";
import { SegundoComponente } from "./segundo-componente/segundo-componente";
import { PipeCustomizado } from "./pipe-customizado/pipe-customizado";
import { DataBinding } from "./data-binding/data-binding";
import { RenderizandoListas } from "./renderizando-listas/renderizando-listas";
import { ComponentePersonalizado } from "./componente-personalizado/componente-personalizado";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponente, SegundoComponente, PipeCustomizado, DataBinding, RenderizandoListas, ComponentePersonalizado],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'fundamentos-angular';
}
