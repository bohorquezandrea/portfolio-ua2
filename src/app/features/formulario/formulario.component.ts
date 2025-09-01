import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.pattern(/^[0-9+\-\s]{7,}$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    fechaNac: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    acepta: new FormControl(false, [Validators.requiredTrue]),
  });
  send() {
    if (this.form.invalid) return;
    console.log('FormGroup data:', this.form.value);
  }
}
