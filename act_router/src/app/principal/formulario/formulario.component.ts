import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nuevo: IAuto = {
    marca: '',
    modelo: '',
    precio: 0,
  };
  constructor(private autoService: AutosService) {}

  ngOnInit(): void {}
  agregar() {
    if (
      this.nuevo.marca.length === 0 ||
      this.nuevo.modelo.length === 0 ||
      this.nuevo.precio === null
    ) {
      return;
    }
    console.log(this.nuevo);
    this.autoService.agregarAuto(this.nuevo);

    this.nuevo = {
      marca: '',
      modelo: '',
      precio: 0,
    };
  }
}
