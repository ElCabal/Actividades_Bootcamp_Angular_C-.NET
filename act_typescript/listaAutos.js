"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var listaAutos = [
    {
        Id: 1,
        Modelo: "Modelo1",
        Marca: "Marca1",
        Anio: "2001",
        precio: 1500
    },
    {
        Id: 2,
        Modelo: "Modelo2",
        Marca: "Marca2",
        Anio: "2002",
        precio: 2500
    },
    {
        Id: 3,
        Modelo: "Modelo3",
        Marca: "Marca3",
        Anio: "2003",
        precio: 3500
    },
    {
        Id: 4,
        Modelo: "Modelo4",
        Marca: "Marca4",
        Anio: "2004",
        precio: 4500
    },
];
(0, auto_1.totalAutos)(listaAutos);
