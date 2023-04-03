"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.printDirection = function () {
        console.log(this.calle, this.numero, this.piso, this.letra, this.codigoPostal, this.poblacion, this.provincia);
    };
    return Direccion;
}());
exports.Direccion = Direccion;
//# sourceMappingURL=direccion.js.map