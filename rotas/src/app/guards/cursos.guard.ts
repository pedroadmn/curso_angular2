import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class CursosGuard implements CanActivateChild {

    canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log('guarda de rota filha');
        return true;
    }


}