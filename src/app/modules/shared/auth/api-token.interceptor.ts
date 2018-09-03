import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiTokenInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes(environment.api.url)) {
            return next.handle(req);
        }

        return next.handle(req.clone({
            headers: new HttpHeaders({
                token: this.authService.getToken()
            })
        }));
    }
}
