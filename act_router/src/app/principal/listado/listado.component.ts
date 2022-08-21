import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  displayedColumns: string[] = ['marca', 'modelo', 'precio'];
  constructor(private autoService: AutosService) {}

  get autos(): IAuto[] {
    return this.autoService.autos;
  }

  ngOnInit(): void {}
}
