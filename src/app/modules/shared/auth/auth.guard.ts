import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(private authService: AuthService,
                private router: Router) {}

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate([ '/login' ]);
            return of(false);
        }

        return of(true);
    }

}
