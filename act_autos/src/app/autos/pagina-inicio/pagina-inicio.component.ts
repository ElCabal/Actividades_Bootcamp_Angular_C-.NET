import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css'],
})
export class PaginaInicioComponent implements OnInit {
  nuevo: IAuto = {
    marca: '',
    modelo: '',
    precio: 0,
  };
  autos: IAuto[] = [
    {
      marca: 'marca1',
      modelo: 'modelo1',
      precio: 1000,
    },
    {
      marca: 'marca2',
      modelo: 'modelo2',
      precio: 2000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  agregar() {
    if (
      this.nuevo.marca.length === 0 ||
      this.nuevo.modelo.length === 0 ||
      this.nuevo.precio === null
    ) {
      return;
    }
    this.autos.push(this.nuevo);

    this.nuevo = {
      marca: '',
      modelo: '',
      precio: 0,
    };
  }
}
