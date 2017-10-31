import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structure and Algorithms 2nd',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assincrono'), 2000)
  });

  valorAsync2 = Observable.interval(2000).map(valor => 'Valor Assincrono 2');

  constructor() { }

  ngOnInit() {
  }

  addCurso(value: string) {
    this.livros.push(value);
  }

  obterCursos(){
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }
    return this.livros.filter(
      (v) => { if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      } else {
        return false
      }
      }
    );
  }

}
