import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCUrso = new EventEmitter<string>();
    
    private cursos: string[] = ['Angular2', 'Java', 'PhoneGap']; 

    constructor(private logService: LogService){
        console.log('CursosService');
    }

    getCursos(){
        this.logService.consoleLog('Obtendo Lista de Cursos');
        return this.cursos;
    }

    addCurso(curso: string){
        this.logService.consoleLog(`Criando novo curso ${curso}`);
         this.cursos.push(curso);
         this.emitirCursoCriado.emit(curso);
         CursosService.criouNovoCUrso.emit(curso);
    }
}