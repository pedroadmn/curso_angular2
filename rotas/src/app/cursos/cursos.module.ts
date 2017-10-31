import { CursosRoutingModule } from './cursos.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
    imports: [
        CommonModule,
        // RouterModule,
        CursosRoutingModule
    ],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [
        CursosService
    ]
})
export class CursosModule {}