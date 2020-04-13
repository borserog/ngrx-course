import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';

import * as fromAuth from './auth.selectors';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.selectLoggedIn),
      tap((isLoggedIn) => {
        console.log('is loggedin value', isLoggedIn);
        if (!isLoggedIn) {
          this.router.navigateByUrl('');
        }
      })
    )
  }
}
