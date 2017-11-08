import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;

  unString:string;
  data: any;

  constructor(public servicioJuego:JuegoServiceService) {
    
  }
  
  ngOnInit() {
    this.listadoParaCompartir = this.servicioJuego.inicializarLista();
   // this.data = this.parsear(this.listadoParaCompartir);
  }

 /* parsear(listado: Array<any>)
  {
    this.unString= JSON.stringify(listado);
    return this.unString;
  }*/
  


}
