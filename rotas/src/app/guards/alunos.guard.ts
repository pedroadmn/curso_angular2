import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log('guarda de rota filha');
        if (state.url.includes('editar')) {
            //alert('Usuario sem acesso');
            //return false;
        }
        return true;
    }


}