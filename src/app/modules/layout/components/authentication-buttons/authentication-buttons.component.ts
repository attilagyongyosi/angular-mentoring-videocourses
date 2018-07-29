import { Component } from '@angular/core';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'vc-authentication-buttons',
    templateUrl: './authentication-buttons.component.html',
    styleUrls: [ './authentication-buttons.component.scss' ]
})
export class AuthenticationButtonsComponent  {
    // todo: make it dumber?
    constructor(private router: Router, private authService: AuthService) { }

    public logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
