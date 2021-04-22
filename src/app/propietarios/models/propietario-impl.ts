import { Propietario } from './propietario';

export class PropietarioImpl implements Propietario{
  id: number;
  nombre: string;
  nif: string;
  apellido1: string;
  apellido2: string;
  mail: string;
  numeroCuenta: string;
  foto: string;
  comentarios: string;
  negocio: any;
  pedidos: any[];

  constructor(){}
}
