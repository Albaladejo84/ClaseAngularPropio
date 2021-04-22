import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Propietario } from '../models/propietario';
import { PropietarioImpl } from '../models/propietario-impl';
import { PropietarioService } from '../service/propietario.service';

@Component({
  selector: 'app-propietarios-form',
  templateUrl: './propietarios-form.component.html',
  styles: [
  ]
})
export class PropietariosFormComponent implements OnInit {

  propietario: Propietario = new PropietarioImpl();

  constructor(
    private propietarioService: PropietarioService,
    private activateRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.cargarPropietario();
  }

  cargarPropietario(): void {
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      if (id) {
        this.propietarioService
          .getPropietario(id)
          .subscribe((propietario) => (this.propietario = propietario));
      }
    });
  }

  actualizar(): void {
      this.propietario.pedidos = null;
      this.propietarioService.actualizar(this.propietario).subscribe(
        (propietario) => {
          console.log(`He actualizado aL propietario`);
          this.router.navigate(['/propietarios']);
         /*  Swal.fire(
            ' Propietario Actualizado',
            `Propietario Nº: ${propietario.propietario.id},
                    ${propietario.propietario.nombre.toUpperCase()},  actualizado con ¡éxito!`,
            'success'
          ); */
        }/* ,
        (err) => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        } */
      );
    }

}
