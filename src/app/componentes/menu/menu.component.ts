import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

    nombreUsuario: String;

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'PPTMasListado':
          this.router.navigate(['/Juegos/PPTMasListado']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'ColoresMasListado':
        this.router.navigate(['/Juegos/ColoresMasListado']);
        break;
      case 'AnagramaMasListado':
      this.router.navigate(['/Juegos/AnagramaMasListado']);
        break;
      case 'Listado':
        this.router.navigate(['/Listado']);
        break;
      
    }
  }

  TomarUsuario(usuario: String)
  {
    this.nombreUsuario = usuario;
  }

}
