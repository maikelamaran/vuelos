import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-iniciar-seccion',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './iniciar-seccion.component.html',
  styleUrl: './iniciar-seccion.component.css',
})
export class IniciarSeccionComponent {
  contra: string = '';
  
  usuario: string = '';

  inputControl = new FormControl();

  formulario = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
   
  });
  onSubmit() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log('Formulario enviado:', formData);
      
    } else {
     console.log('dio error el formulario');
    }
  }
}
