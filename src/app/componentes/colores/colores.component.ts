import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  constructor() { }

  public color1:String ="btn btn-danger";
  public color2:String ="btn btn-success";
  public color3:String ="btn btn-primary";
  public color4:String ="btn btn-warning";
  public color5:String ="btn btn-info";
  public contador: number=0;
  public gano:boolean;

  ngOnInit() {
  }

  Cambio(boton: String)
  { 
    switch(boton)
    {
      case "button1":
      {
        this.color2=this.Next(this.color2);
        this.color4=this.Next(this.color4);
        this.color5=this.Next(this.color5);
        this.contador++;
        break;
      }
      case "button2":
      {
        this.color1=this.Next(this.color1);
        this.color3=this.Next(this.color3);
        this.color4=this.Next(this.color4);
        this.contador++;
        break;
      }
      case "button3":
      {
        this.color5=this.Next(this.color5);
        this.color1=this.Next(this.color1);
        this.color2=this.Next(this.color2);
        this.contador++;
        break;
      }
      case "button4":
      {
        this.color1=this.Next(this.color1);
        this.color5=this.Next(this.color5);
        this.color3=this.Next(this.color3);
        this.contador++;
        break;
      }
      case "button5":
      {
        this.color2=this.Next(this.color2);
        this.color3=this.Next(this.color3);
        this.color4=this.Next(this.color4);
        this.contador++;
        break;
      }
    }
  }

  Verificar()
  {
    if((this.color1==this.color2) && (this.color2==this.color3) && (this.color3==this.color4) &&
    (this.color4==this.color5) && this.contador<=10)
    {
      this.gano=true;
    }
    else
    this.gano=false;

  }



  Next(color: String)
  {
    switch(color)
    {
      case "btn btn-danger":
      {
      color="btn btn-success";
      break;
      }
     
      case "btn btn-success":
      {
      color="btn btn-primary";
      break;
      }

      case "btn btn-primary":
      {
      color="btn btn-warning";
      break;
      }

      case "btn btn-warning":
      {
      color="btn btn-info";
      break;
      }

      case "btn btn-info":
      {
      color="btn btn-danger";
      break;
      }
    }
    return color;
  }





}
