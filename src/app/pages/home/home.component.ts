import { Component } from '@angular/core';
import { HomeLeftComponent } from '../home-left/home-left.component';
import { HomeRightComponent } from '../home-right/home-right.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeLeftComponent,HomeRightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
