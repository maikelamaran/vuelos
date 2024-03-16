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
rating:number=3.5;
usuario:string="Erika Scarlet Clark";
opinion:string="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adminim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputatevelit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros etaccumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augueduis dolore te feugait nulla facilisi.Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adminim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipex ea commodo consequat";

}
