import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Breadcrumbs } from '../models/breadcrumb';

@Injectable()
export class BreadcrumbsService {
    private breadcrumbs$: Subject<Breadcrumbs> = new Subject();

    get breadcrumbs(): Subject<Breadcrumbs> {
        return this.breadcrumbs$;
    }

    public changeBreadcrumbs(breadcrumbs: Breadcrumbs): void {
        this.breadcrumbs$.next(breadcrumbs);
    }
}
