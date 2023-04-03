// Clase para almacenar la dirección de la persona
class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string;

    // Constructor de la clase
    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    // Método para imprimir la dirección
    printDirection() {
        console.log(this.calle, this.numero, this.piso, this.letra, this.codigoPostal, this.poblacion, this.provincia);
    }
}

export {Direccion}

