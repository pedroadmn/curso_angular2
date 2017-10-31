import { LogService } from './shared/log.service';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [
    // CursosService,
    LogService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
