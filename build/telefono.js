"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Telefono.prototype.printPhone = function () {
        console.log(this.tipo, this.numero);
    };
    return Telefono;
}());
exports.Telefono = Telefono;
//# sourceMappingURL=telefono.js.map