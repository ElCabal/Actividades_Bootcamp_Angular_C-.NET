import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';
import { FormsModule } from '@angular/forms';
import { AgregarAutosComponent } from './agregar-autos/agregar-autos.component';
import { AutosService } from './autos.service';

@NgModule({
  declarations: [
    PaginaInicioComponent,
    ListadoAutosComponent,
    AgregarAutosComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    PaginaInicioComponent,
    ListadoAutosComponent,
    AgregarAutosComponent,
  ],
  providers: [AutosService],
})
export class AutosModule {}
