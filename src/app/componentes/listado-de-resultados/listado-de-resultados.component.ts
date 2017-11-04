
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;

 miJson= {nombre:"Asjads",ape:"sads"};
 
  
 miSmartTable: Ng2SmartTableModule={
  columns: {
    jugador: {
      title: 'JUGADOR'
    },
    juego: {
      title: 'JUEGO'
    },
    resultado: {
      title: 'RESULTADO'
    }
  }
};

data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  
  // ... list of items
  
  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];


  constructor() {
   }

  ngOnInit() {
    localStorage.setItem('token', JSON.stringify(this.data));
    console.log(localStorage.getItem('token'));//probar json.parse porque devuelve un string
  }

  ver() {
    console.info(this.listado);
  }

}
