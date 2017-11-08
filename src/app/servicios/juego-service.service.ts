import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego';

@Injectable()
export class JuegoServiceService {

  miArray: Array<Juego>;

  constructor( ) {
  this.miArray = new Array<Juego>();
  }

  public inicializarLista(): Array<Juego>
  {
    return this.miArray;
  }
 
  public cargarLista(array: Array<Juego>)
  {
    this.miArray.concat(array);
  }

}
