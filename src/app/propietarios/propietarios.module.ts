import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropietariosRoutingModule } from './propietarios-routing.module';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { PropietarioComponent } from './propietarios/propietario/propietario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropietariosFormComponent } from './propietarios-form/propietarios-form.component';


@NgModule({
  declarations: [PropietariosComponent, PropietarioComponent, PropietariosFormComponent],
  imports: [
    CommonModule,
    PropietariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PropietariosModule { }
