import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const alunosRoutes: Routes = [
    { path: '', component: AlunosComponent, children: [
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent }
    ] },
    
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)], // Modulo de funcionalidade de rotas
    exports: [RouterModule]
})
export class AlunosRoutingModule {


}