import { Component } from '@angular/core';
import { OpinionesTopComponent } from '../../components/opiniones-top/opiniones-top.component';
import { OpinionesDerechaBotComponent } from '../../components/opiniones-derecha-bot/opiniones-derecha-bot.component';
import { OpinionesDerechaTopComponent } from '../../components/opiniones-derecha-top/opiniones-derecha-top.component';
import { OpinionesIzquierdaBotComponent } from '../../components/opiniones-izquierda-bot/opiniones-izquierda-bot.component';
import { OpinionesIzquierdaTopComponent } from '../../components/opiniones-izquierda-top/opiniones-izquierda-top.component';


@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [OpinionesTopComponent,OpinionesDerechaBotComponent,OpinionesDerechaTopComponent,OpinionesIzquierdaBotComponent,OpinionesIzquierdaTopComponent],
  templateUrl: './opiniones.component.html',
  styleUrl: './opiniones.component.css'
})
export class OpinionesComponent {

}
