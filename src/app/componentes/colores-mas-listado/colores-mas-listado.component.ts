import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-colores-mas-listado',
  templateUrl: './colores-mas-listado.component.html',
  styleUrls: ['./colores-mas-listado.component.css']
})
export class ColoresMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
    
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
   // console.info("en app",this.listadoParaCompartir);
  }

}
