import { Params } from '@angular/router';

export interface BreadcrumbModel {
    label: string;
    params?: Params;
    url: string;
}
