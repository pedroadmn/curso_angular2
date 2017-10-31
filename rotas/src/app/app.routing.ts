import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

