//Clase para almacenar el teléfono de la persona
class Telefono {
    tipo: string;
    numero: number;

    // Constructor de la clase
    constructor(tipo: string, numero: number) {
        this.tipo = tipo;
        this.numero = numero;
    }

    // Método para imprimir el teléfono
    printPhone() {
        console.log(this.tipo, this.numero);
    }
}

export {Telefono}