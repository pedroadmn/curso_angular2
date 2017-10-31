import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'}
  ]

  constructor() { }
  
  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i = 0, maxAlunos = this.alunos.length; i < maxAlunos; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id){
        return this.alunos[i];
      }
    }
    return null;
  }

}
