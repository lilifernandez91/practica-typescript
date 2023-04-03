"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = (function () {
    function Persona(nombre, apellido, edad, DNI, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    Persona.prototype.printPerson = function () {
        console.log(this.nombre, this.apellido, this.edad, this.DNI, this.cumpleaños, this.colorFavorito, this.sexo, this.direcciones, this.mails, this.telefonos, this.notas);
    };
    Persona.prototype.addAddress = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.addMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.addPhone = function (telefono) {
        this.telefonos.push(telefono);
    };
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map