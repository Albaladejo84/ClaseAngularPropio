import { Component, OnInit } from '@angular/core';
import { Propietario } from '../models/propietario';
import { PropietarioService } from '../service/propietario.service';
import { map, share, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styles: [
  ]
})
export class PropietariosComponent implements OnInit {

  propietarios: Propietario[] = [];
  observable$;
  observable;

  constructor(private propietarioService: PropietarioService) { }

  ngOnInit(): void {
    this.observable$ = this.propietarioService.getPropietarios();
    this.propietarioService.getPropietariosTransformados()
      .subscribe(propietarios => {
        this.propietarios = propietarios;
      });
  }

}
