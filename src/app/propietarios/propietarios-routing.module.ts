import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietariosFormComponent } from './propietarios-form/propietarios-form.component';
import { PropietariosComponent } from './propietarios/propietarios.component';

const routes: Routes = [
  {
    path: '',
    component: PropietariosComponent
  },
  {
    path: 'formulario/:id',
    component: PropietariosFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropietariosRoutingModule { }
