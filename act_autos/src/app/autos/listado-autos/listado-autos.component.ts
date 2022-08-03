import { Component, Input, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css'],
})
export class ListadoAutosComponent implements OnInit {
  /*   @Input()
  autos: IAuto[] = []; */

  constructor(private autoService: AutosService) {}

  get autos(): IAuto[] {
    return this.autoService.autos;
  }

  ngOnInit(): void {}
}
