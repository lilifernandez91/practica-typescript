//Clase para almacenar el mail de la persona
class Mail {
    tipo: string;
    direccion: string;

    // Constructor de la clase
    constructor(tipo: string, direccion: string) {
        this.tipo = tipo;
        this.direccion = direccion;
    }

    // Método para imprimir el mail
    printMail() {
        console.log(this.tipo, this.direccion);
    }
}

export {Mail}
