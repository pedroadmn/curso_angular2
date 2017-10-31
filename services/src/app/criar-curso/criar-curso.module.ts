import { ReceberCursoCriadoComponent } from './../receber-curso-criado/receber-curso-criado.component';
import { CommonModule } from '@angular/common';
import { CursosService } from '../cursos/cursos.service';
import { NgModule } from '@angular/core';

import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CursosService],
  exports: [
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
