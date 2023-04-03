"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Mail.prototype.printMail = function () {
        console.log(this.tipo, this.direccion);
    };
    return Mail;
}());
exports.Mail = Mail;
//# sourceMappingURL=mail.js.map