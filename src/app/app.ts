import { Component } from '@angular/core';
import { PrimeiroComponente } from "./primeiro-componente/primeiro-componente";
import { SegundoComponente } from "./segundo-componente/segundo-componente";
import { PipeCustomizado } from "./pipe-customizado/pipe-customizado";
import { DataBinding } from "./data-binding/data-binding";
import { RenderizandoListas } from "./renderizando-listas/renderizando-listas";
import { ComponentePersonalizado } from "./componente-personalizado/componente-personalizado";
import { CompoentePai } from "./compoente-pai/compoente-pai";
import { ExemploServicos1 } from "./exemplo-servicos1/exemplo-servicos1";
import { ExemploServicos2 } from "./exemplo-servicos2/exemplo-servicos2";

@Component({
  selector: 'app-root',
  imports: [PrimeiroComponente, SegundoComponente, PipeCustomizado, DataBinding, RenderizandoListas, ComponentePersonalizado, CompoentePai, ExemploServicos1, ExemploServicos2],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'fundamentos-angular';
}
