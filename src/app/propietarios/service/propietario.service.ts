import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Propietario } from '../models/propietario';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  private urlEndPoint: string = environment.hostControladores + 'propietarios';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  getPropietarios(): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(this.urlEndPoint);
  }

  getPropietariosTransformados(): Observable<Propietario[]> {
    return this.getPropietarios().pipe(
      tap({
        next: (response: any[]) => { response.forEach((p: Propietario) => { /* console.log(p.negocio.nombre);  */}); }
      })
      , map(r => this.tarsformarNombre(r as Propietario[]))
      , tap({
        next: (response: any[]) => { response.forEach((p: Propietario) => { /* console.log(p.negocio); */ }); }
      })
    );
  }

  tarsformarNombre(propietarios: Propietario[]): Propietario[] {
    const array: Propietario[] = [];
    propietarios.forEach(p => {
      p.negocio = 'Sin Negocio';
      p.pedidos = [];
      array.push(p);
    });
    return array;
  }

  getPropietario(id): Observable<Propietario> {
    return this.http.get<Propietario>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          this.router.navigate(['/propietarios']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  actualizar(propietario: Propietario): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}/${propietario.id}`, propietario)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }
  borrar(id: number): Observable<Propietario> {
    return this.http
      .delete<Propietario>(`${this.urlEndPoint}/sin-correo/${id}`)
      .pipe(
        catchError((e) => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

}
