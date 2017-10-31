import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
//import { AlunosModule } from './alunos/alunos.module';
//import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app.routing.module';
//import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MaterializeModule } from "angular2-materialize";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //routing,
    MaterializeModule,
    AppRoutingModule
    //CursosModule,
    //AlunosModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
