import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    public login(): void {
        localStorage.setItem('user', 'Test User');
    }

    public logout(): void {
        localStorage.removeItem('user');
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem('user') !== undefined;
    }

    public getUserInfo(): string {
        return localStorage.getItem('user');
    }
}
