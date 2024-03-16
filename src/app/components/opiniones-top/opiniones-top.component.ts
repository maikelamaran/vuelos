import { Component } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
@Component({
  selector: 'app-opiniones-top',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './opiniones-top.component.html',
  styleUrl: './opiniones-top.component.css'
})
export class OpinionesTopComponent {
  
}
