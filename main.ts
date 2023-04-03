//Importamos las clases que vamos a usar
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";
import { Persona } from "./persona";

// Creamos la dirección de la persona 1
let directionPerson1 = [
    new Direccion("Calle Laurel", 3, 2, "A", 23998, "Logroño", "La Rioja"),
];

// Creamos el mail de la persona 1
let mailPerson1 = [new Mail("personal", "manuelglez@gmail.com")];

// Creamos el teléfono de la persona 1
let phonePerson1 = [new Telefono("personal", 660876453)];

// Creamos la dirección de la persona 2
let directionPerson2 = [
    new Direccion("Paseo de los Tristes", 6, 4, "B", 67993, "Granada", "Andalucía"),
];

// Creamos el mail de la persona 2
let mailPerson2 = [new Mail("personal", "sofi@gmail.com")];

// Creamos el teléfono de la persona 2
let phonePerson2 = [new Telefono("personal", 660839254)];

// Creamos la dirección de la persona 3
let directionPerson3 = [
    new Direccion("Calle de las Flores", 23, 2, "A", 23987, "Córdoba", "Andalucía"),
];

// Creamos el mail de la persona 3
let mailPerson3 = [new Mail("personal", "juanpe@gmail.com")];

// Creamos el teléfono de la persona 3
let phonePerson3 = [new Telefono("personal", 6608785034)];

// Añadimos a new Person los datos de la persona 1, 2 y 3
let persona1 = new Persona(
    "Manuel",
    "Gonzales",
    33,
    7474764637,
    new Date(1987, 5, 12),
    "azul",
    "hombre",
    directionPerson1,
    mailPerson1,
    phonePerson1,
    "excelente"
);
let persona2 = new Persona(
    "Sofía",
    "Gómez",
    28,
    8649035678,
    new Date(1992, 5, 12),
    "rojo",
    "mujer",
    directionPerson2,
    mailPerson2,
    phonePerson2,
    "muy bien"
);
let persona3 = new Persona(
    "Juan",
    "Pérez",
    45,
    7467453890,
    new Date(1975, 5, 12),
    "verde",
    "hombre",
    directionPerson3,
    mailPerson3,
    phonePerson3,
    "muy bien"
);

// Creamos un array con las personas y buscamos la persona con el DNI 7474764637
let personas = [persona1, persona2, persona3];
let personData = personas.filter((persona) => persona.DNI === 7474764637)[0];

// Añadimos una nueva dirección, un nuevo mail y un nuevo teléfono a la persona con el DNI 7474764637
if (personData) {
    let direccion2 = new Direccion("Paseo de la Gracia", 30, 2, "A", 54789, "Barcelona", "Cataluña");
    personData.addAddress(direccion2);
    let mail2 = new Mail("trabajo", "manugonzales@gmail.com");
    personData.addMail(mail2);
    let telefono2 = new Telefono("trabajo", 785093564);
    personData.addPhone(telefono2);
}

// Imprimimos los datos de las personas
persona1.printPerson();
persona2.printPerson();
persona3.printPerson();
