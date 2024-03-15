import { Component } from '@angular/core';
import { VuelosleftTopComponent } from '../../components/vuelosleft-top/vuelosleft-top.component';
import { VuelosleftBotComponent } from '../../components/vuelosleft-bot/vuelosleft-bot.component';
import { VuelosCenterComponent } from '../../components/vuelos-center/vuelos-center.component';
import { VuelosTopComponent } from '../../components/vuelos-top/vuelos-top.component';
import { VuelosrightBotComponent } from '../../components/vuelosright-bot/vuelosright-bot.component';
import { VuelosrightTopComponent } from '../../components/vuelosright-top/vuelosright-top.component';

@Component({
  selector: 'app-llevarte',
  standalone: true,
  imports: [VuelosCenterComponent,VuelosTopComponent,VuelosleftBotComponent,VuelosleftTopComponent,VuelosrightBotComponent,VuelosrightTopComponent],
  templateUrl: './llevarte.component.html',
  styleUrl: './llevarte.component.css'
})
export class LlevarteComponent {

}
