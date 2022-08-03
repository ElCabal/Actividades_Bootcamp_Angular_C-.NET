import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css'],
})
export class PaginaInicioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  agregarNuevoAuto(auto: IAuto) {
    /* this.autos.push(auto); */
  }
}
