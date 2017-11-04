import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
    { path: '', component: AlunosComponent,
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
            { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }
        ],
        canActivateChild: [AlunosGuard]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)], // Modulo de funcionalidade de rotas
    exports: [RouterModule]
})
export class AlunosRoutingModule {


}