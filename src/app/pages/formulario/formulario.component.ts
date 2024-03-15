import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatIconModule,MatDatepickerModule,MatFormFieldModule,MatRadioModule,FormsModule,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers: [provideNativeDateAdapter()]
})
export class FormularioComponent {
  formularioSeleccionado: string='avion';
  selectedDateSalida:Date= new Date();
  selectedDateRetorno:Date= new Date();


  mostrarFormulario(icono: string): void {
    this.formularioSeleccionado = icono;
  }

  emitirDatos(){
    console.log("envio datos ficticios");
  }
  onDateChange(event: any) {
    console.log(event.value);
  }


}
