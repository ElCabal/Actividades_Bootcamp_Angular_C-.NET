import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IAuto } from '../interfaces/auto';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-agregar-autos',
  templateUrl: './agregar-autos.component.html',
  styleUrls: ['./agregar-autos.component.css'],
})
export class AgregarAutosComponent implements OnInit {
  nuevo: IAuto = {
    marca: '',
    modelo: '',
    precio: 0,
  };

  //@Output()
  //onNuevoAuto: EventEmitter<IAuto> = new EventEmitter();

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

    this.autoService.agregarAuto(this.nuevo);

    this.nuevo = {
      marca: '',
      modelo: '',
      precio: 0,
    };
  }
}
