import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormularioRoutingModule, FormularioComponent],
})
export class FormularioModule {}
