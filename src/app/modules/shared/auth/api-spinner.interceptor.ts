import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { SpinnerOverlayService } from '../spinner-overlay/services/spinner-overlay.service';

@Injectable()
export class ApiSpinnerInterceptor implements HttpInterceptor {

    constructor(private spinner: SpinnerOverlayService) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes(environment.api.url)) {
            return next.handle(req);
        }

        this.spinner.show();
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.spinner.hide();
                }
                return event;
            })
        );
    }
}
