import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-componente-personalizado',
  imports: [],
  templateUrl: './componente-personalizado.html',
  styleUrl: './componente-personalizado.scss'
})
export class ComponentePersonalizado {
  @Input() nome = "";
  @Input() sobrenome = "";
}
