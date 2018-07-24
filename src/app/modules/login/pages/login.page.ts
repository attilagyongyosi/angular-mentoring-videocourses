import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth/services/auth.service';
import { Credentials } from '../../shared/auth/models/credentials';
import { Router } from '@angular/router';

@Component({
    selector: 'vc-login-page',
    templateUrl: 'login.page.html',
    styleUrls: [ 'login.page.scss' ]
})
export class LoginPageComponent {

    constructor(private router: Router, private authService: AuthService) {}

    public login(credentials: Credentials): void {
        this.authService.login(credentials);
        console.log('Logged in successfully.');
        this.router.navigate(['/courses']);
    }
}
