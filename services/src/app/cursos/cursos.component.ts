import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [ CursosService ]
})
export class CursosComponent implements OnInit {


  cursos: string[] = [];
  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCUrso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
