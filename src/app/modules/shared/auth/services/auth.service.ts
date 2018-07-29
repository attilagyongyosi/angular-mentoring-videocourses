import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';

@Injectable()
export class AuthService {
    private static readonly USER_KEY = 'user';
    private static readonly TOKEN_KEY = 'token';

    public login(credentials: Credentials): void {
        localStorage.setItem(AuthService.USER_KEY, JSON.stringify(credentials));
        localStorage.setItem(AuthService.TOKEN_KEY, 'dfhdufd7387sf');
    }

    public logout(): void {
        localStorage.removeItem(AuthService.USER_KEY);
        localStorage.removeItem(AuthService.TOKEN_KEY);
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem(AuthService.TOKEN_KEY) !== null;
    }

    public getUserInfo(): any {
        return localStorage.getItem(JSON.parse(AuthService.USER_KEY));
    }
}
