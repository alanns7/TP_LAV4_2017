export class JuegoAnagrama {

    palabrasDesordenadas: Array<string> = new Array<string>();
    palabrasOrdenadas: Array<string> = new Array<string>();

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
            "CALABAZA"]

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
        ]
    }

    DameUnaPalabra()
    {
        this.palabrasDesordenadas
    }

    Verificar(unaPalabra: string)
    {

    }


}
