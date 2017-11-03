import { Juego } from '../clases/juego'

export class PiedraPapelTijera {

    numeroRandom: number=0;
    piedra: number=1;
    papel: number=2;
    tijera: number=3;
    resultado: string;
    

    constructor()
    {
        
    }

    Comenzar()
    {
        this.numeroRandom=Math.floor((Math.random()*3)+1);
    }

    Piedra()
    {   
        this.Comenzar();
        
        if(this.numeroRandom==1)
        {
            this.resultado="Empato";
        }
        if(this.numeroRandom==2)
        {
            this.resultado="Perdio";
        }
        if(this.numeroRandom==3)
        {
            this.resultado="Gano";
        }
    }

    Papel()
    {
        this.Comenzar();

        if(this.numeroRandom==1)
        {
            this.resultado="Gano";
        }
        if(this.numeroRandom==2)
        {
            this.resultado="Empato";
        }
        if(this.numeroRandom==3)
        {
            this.resultado="Perdio";
        }
    }

    Tijera()
    {
        this.Comenzar();

        if(this.numeroRandom==1)
        {
            this.resultado="Perdio";
        }
        if(this.numeroRandom==2)
        {
            this.resultado="Gano";
        }
        if(this.numeroRandom==3)
        {
            this.resultado="Empato";
        }
    }

    MostrarResultado()
    {

    }

}
