import { Component } from '@angular/core';
import { ProducttemplateComponent } from '../../components/producttemplate/producttemplate.component';
import {
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prod-recomendados',
  standalone: true,
  imports: [ProducttemplateComponent, CommonModule,MatButtonModule, MatCardModule],
  templateUrl: './prod-recomendados.component.html',
  styleUrl: './prod-recomendados.component.css',
})
export class ProdRecomendadosComponent {
  cabeceraPrimera: string = 'Los Hoteles Favoritos';
  cabeceraSecundaria: string = 'Casas de Renta que Enamoran';
  listadodeproductos: Producto[] = [];
  listadodecasas: Producto[] = [];
  listadodehoteles: Producto[] = [];
  constructor(private servicioProductos: ProductosService) {
    this.listadodeproductos = servicioProductos.getAllProducts();
    this.listadodecasas = servicioProductos.getallcasas();
    this.listadodehoteles = servicioProductos.getallhoteles();
  }
}
