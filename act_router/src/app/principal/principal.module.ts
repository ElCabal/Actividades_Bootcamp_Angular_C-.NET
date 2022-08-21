import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AutosService } from './autos.service';

@NgModule({
  declarations: [FormularioComponent, ListadoComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [FormularioComponent, ListadoComponent],
  providers: [AutosService],
})
export class PrincipalModule {}
