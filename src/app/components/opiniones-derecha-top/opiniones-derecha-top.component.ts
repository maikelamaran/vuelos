import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StarRatingComponent } from '../star-rating/star-rating.component';


@Component({
  selector: 'app-opiniones-derecha-top',
  standalone: true,
  imports: [MatCardModule, StarRatingComponent],
  templateUrl: './opiniones-derecha-top.component.html',
  styleUrl: './opiniones-derecha-top.component.css',
})
export class OpinionesDerechaTopComponent {
  @Input() rating: number = 3.5;
  @Input() usuario:string = "Erika Scarlet Clark";
}
