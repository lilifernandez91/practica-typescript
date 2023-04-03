"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var persona_1 = require("./persona");
var directionPerson1 = [
    new direccion_1.Direccion("Calle Laurel", 3, 2, "A", 23998, "Logroñpn", "La Rioja"),
];
var mailPerson1 = [new mail_1.Mail("personal", "manuelglez@gmail.com")];
var phonePerson1 = [new telefono_1.Telefono("personal", 660876453)];
var directionPerson2 = [
    new direccion_1.Direccion("Paseo de los Tristes", 6, 4, "B", 67993, "Granada", "Andalucía"),
];
var mailPerson2 = [new mail_1.Mail("personal", "sofi@gmail.com")];
var phonePerson2 = [new telefono_1.Telefono("personal", 660839254)];
var directionPerson3 = [
    new direccion_1.Direccion("Calle de las Flores", 23, 2, "A", 23987, "Córdoba", "Andalucía"),
];
var mailPerson3 = [new mail_1.Mail("personal", "juanpe@gmail.com")];
var phonePerson3 = [new telefono_1.Telefono("personal", 6608785034)];
var persona1 = new persona_1.Persona("Manuel", "Gonzales", 33, 7474764637, new Date(1987, 5, 12), "azul", "hombre", directionPerson1, mailPerson1, phonePerson1, "excelente");
var persona2 = new persona_1.Persona("Sofía", "Gómez", 28, 8649035678, new Date(1992, 5, 12), "rojo", "mujer", directionPerson2, mailPerson2, phonePerson2, "muy bien");
var persona3 = new persona_1.Persona("Juan", "Pérez", 45, 7467453890, new Date(1975, 5, 12), "verde", "hombre", directionPerson3, mailPerson3, phonePerson3, "muy bien");
var personas = [persona1, persona2, persona3];
var personData = personas.filter(function (persona) { return persona.DNI === 7474764637; })[0];
if (personData) {
    var direccion2 = new direccion_1.Direccion("Paseo de la Gracia", 30, 2, "A", 54789, "Barcelona", "Cataluña");
    personData.addAddress(direccion2);
    var mail2 = new mail_1.Mail("trabajo", "manugonzales@gmail.com");
    personData.addMail(mail2);
    var telefono2 = new telefono_1.Telefono("trabajo", 785093564);
    personData.addPhone(telefono2);
}
persona1.printPerson();
persona2.printPerson();
persona3.printPerson();
//# sourceMappingURL=main.js.map