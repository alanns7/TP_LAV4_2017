import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-colores-mas-listado',
  templateUrl: './colores-mas-listado.component.html',
  styleUrls: ['./colores-mas-listado.component.css']
})
export class ColoresMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  
    constructor(public servicioJuego: JuegoServiceService) 
    { 
      this.listadoParaCompartir = new Array<any>()
    }
  
    ngOnInit() {
  
      this.listadoParaCompartir=this.servicioJuego.inicializarLista();  
    }
  
    tomarJuegoTerminado(juego: Juego)
    {
      this.listadoParaCompartir.push(juego);
      this.servicioJuego.cargarLista(this.listadoParaCompartir); 
    }

}
