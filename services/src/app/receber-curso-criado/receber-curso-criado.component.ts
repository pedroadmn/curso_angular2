import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  constructor(private cursoService: CursosService) { }

  curso: string;

  ngOnInit() {
    this.cursoService.emitirCursoCriado.subscribe(
      curso => this.curso = curso
    );
  }

}
