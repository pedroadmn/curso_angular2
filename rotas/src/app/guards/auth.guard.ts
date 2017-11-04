import { AuthService } from './../login/auth.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
  RouterStateSnapshot, Router, CanLoad, Route } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  verificarAcesso(){
     if (this.authService.usuarioEstaAutenticado()) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Observable<boolean> {
        console.log('Auth Guard');
        return this.verificarAcesso();
    }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('CanLoad: verificando se usuario pode carregar o codigo do modulo');
      return this.verificarAcesso();
    }
}
