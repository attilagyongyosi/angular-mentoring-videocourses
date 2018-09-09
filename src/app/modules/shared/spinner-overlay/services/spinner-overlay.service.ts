import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SpinnerOverlayService {
    private spinnerSubject$: Subject<boolean> = new Subject();

    public show(): void {
        this.spinnerSubject$.next(true);
    }

    public hide(): void {
        this.spinnerSubject$.next(false);
    }

    public onChange(): Observable<boolean> {
        return this.spinnerSubject$;
    }
}
