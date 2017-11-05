export class JuegoAnagrama {

    palabrasDesordenadas: Array<string> = new Array<string>();
    palabrasOrdenadas: Array<string> = new Array<string>();
    palabraAJugar: string;
    palabraDeUsuario:string='';
    gano: boolean;
    contador: number=0;
    numeroRandom:number=0;

    Comenzar()
    {
        this.palabrasOrdenadas=[
            "COCINA",
            "PROGRAMACION",
            "ANGULAR",
            "ELECTRODOMESTICO",
            "RADIOGRAFIA",
            "CURTIEMBRE",
            "CASA",
            "PAJARO",
            "CUCHILLO",
            "DICCIONARIO",
            "ENRIEDO",
            "MURCIELAGO",
            "CALABAZA"];

        this.palabrasDesordenadas=[
            "INCOCA",
            "RAGORPCIMANO",
            "RALGNUA",
            "MESOCITELEORCTE",
            "DIARAOGRAFI",
            "BRETIEMCUR",
            "SCAA",
            "ROJPAA",
            "LILOHUCC",
            "CIDCIOROINA",
            "ODIENER",
            "GOLAICEURM",
            "ZALACABA"
        ];
        this.Next();
    }

    Next()
    {   
        this.numeroRandom=Math.floor((Math.random() * 12) + 0);
        this.palabraAJugar = this.palabrasDesordenadas[this.numeroRandom];
    }

    Verificar(unaPalabra: string)
    {   
        if(unaPalabra!='' && unaPalabra!= null){
            console.log("Verificar"+unaPalabra);

            if(unaPalabra == this.palabrasOrdenadas[this.numeroRandom]){
                this.gano=true;
                this.contador=0;
            }
            else{
                this.contador++;
            }

            if(this.contador==3)
            {
                this.gano=false;
                this.Next();
                this.contador=0;
            }
        }
    }   

    Rendirse()
    {   
        this.gano=false;
        this.Next();
    }
    


}
