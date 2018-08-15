import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { LoginResponseModel } from '../models/login-response.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private static readonly USER_KEY = 'user';
    private static readonly TOKEN_KEY = 'token';

    constructor(private http: HttpClient) {}

    public login(credentials: Credentials): Observable<LoginResponseModel> {
        return this.http.post<LoginResponseModel>('http://localhost:3004/auth/login', {
            login: credentials.userName,
            password: credentials.password
        }).pipe(
            map((response) => {
                localStorage.setItem(AuthService.TOKEN_KEY, response.token);
                return response;
            }),
            catchError(() => throwError('Login failed'))
        );
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
