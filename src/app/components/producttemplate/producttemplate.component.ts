import { Component, Input } from '@angular/core';
import {
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Producto } from '../../interfaces/producto.interface';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { MatDividerModule } from '@angular/material/divider';
import { TruncarText } from '../../pipes/truncartexto.pipe';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-producttemplate',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatDividerModule,StarRatingComponent,TruncarText,MatIconModule],
  templateUrl: './producttemplate.component.html',
  styleUrl: './producttemplate.component.css',

})
export class ProducttemplateComponent {
  @Input() producto?:Producto;
  
  // producto: Producto = {
  //   nombre: 'Gran Hotel Manzana Kempinski',
  //   precio: 1500,
  //   rating: 5,
  //   ubicacion: 'Habana',
  //   clasificacion: 'hotel',
  // };
}
