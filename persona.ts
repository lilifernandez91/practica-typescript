//Importamos las clases que vamos a usar
import {Direccion} from './direccion';
import {Mail} from './mail';
import {Telefono} from './telefono';

//Clase para almacenar los datos de la persona
class Persona {
    nombre: string;
    apellido: string;
    edad: number;
    DNI: number;
    cumpleaños: Date;
    colorFavorito: string;
    sexo: string;
    direcciones: Array<Direccion>;
    mails: Array<Mail>;
    telefonos: Array<Telefono>;
    notas: string;

    // Constructor de la clase
    constructor(nombre: string, apellido: string, edad: number, DNI: number, cumpleaños: Date, colorFavorito: string, sexo: string, direcciones: Array<Direccion>, mails: Array<Mail>, telefonos: Array<Telefono>, notas: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.DNI = DNI;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }

    // Método para imprimir los datos de la persona
    printPerson() {
        console.log(this.nombre, this.apellido, this.edad, this.DNI, this.cumpleaños, this.colorFavorito, this.sexo, this.direcciones, this.mails, this.telefonos, this.notas);
    }

    // Método para añadir un teléfono a la persona
    addAddress (direccion: Direccion) {
        this.direcciones.push(direccion);
    }

    // Método para añadir un mail a la persona
    addMail (mail: Mail) {
        this.mails.push(mail);
    }

    // Método para añadir un teléfono a la persona
    addPhone (telefono: Telefono) {
        this.telefonos.push(telefono);
    }
}

export {Persona}


