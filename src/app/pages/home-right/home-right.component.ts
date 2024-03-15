import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-right',
  standalone: true,
  imports: [FormularioComponent,RouterModule],
  templateUrl: './home-right.component.html',
  styleUrl: './home-right.component.css'
})
export class HomeRightComponent {

}
