import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth/services/auth.service';

@Component({
    selector: 'vc-login-page',
    templateUrl: 'login.page.html'
})
export class LoginPageComponent {
    constructor(private authService: AuthService) {}
}
