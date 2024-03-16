import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opiniones-derecha-bot',
  standalone: true,
  imports: [],
  templateUrl: './opiniones-derecha-bot.component.html',
  styleUrl: './opiniones-derecha-bot.component.css'
})
export class OpinionesDerechaBotComponent {
@Input() opinion:string="";
}
