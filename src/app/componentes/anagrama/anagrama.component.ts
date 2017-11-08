import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  miJuego: JuegoAnagrama;

  @Output()
  enviarJuego:EventEmitter<any>= new EventEmitter<any>();

  constructor(private miServicio?: JuegoServiceService) 
  { 
    this.miJuego = new JuegoAnagrama("Anagrama","Alan",true);
  }


  ngOnInit() {
    
    this.comienzo();
  }

  rendirse()
  {
    this.miJuego.Rendirse();
    this.miJuego.jugador= this.miServicio.retornarUsuario();
    this.enviarJuego.emit(this.miJuego);
  }

  verificar(laPalabra: string)
  {
    this.miJuego.Verificar(laPalabra);
    if(this.miJuego.contador==3 || this.miJuego.gano==true)
    {
    this.miJuego.jugador= this.miServicio.retornarUsuario();
    this.enviarJuego.emit(this.miJuego);
    }
  }

  comienzo()
  {
    this.miJuego = new JuegoAnagrama("Anagrama","Alan",true);
    this.miJuego.Comenzar();
  }
  /* this.unJuego.nombre= this.miServicio.retornarUsuario();
      this.enviarJuego.emit(this.unJuego);*/
}
