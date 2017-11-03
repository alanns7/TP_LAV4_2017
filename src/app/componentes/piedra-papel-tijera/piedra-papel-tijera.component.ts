import { Component, OnInit } from '@angular/core';
import { PiedraPapelTijera } from '../../clases/piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  juegoPPT: PiedraPapelTijera;

  constructor() 
  { 
    this.juegoPPT = new PiedraPapelTijera();
  }

  ngOnInit() {
  }

}
