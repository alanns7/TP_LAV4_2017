import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  /* @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();*/
  juegoCalculo: JuegoAgilidad;
  
    constructor()
     { 
        this.juegoCalculo = new JuegoAgilidad();
     }
     
    ngOnInit() {
    }

}
