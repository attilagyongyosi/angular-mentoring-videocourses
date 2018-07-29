import { Component } from '@angular/core';
import { Breadcrumbs } from '../../models/breadcrumb';
import { BreadcrumbsService } from '../../services/breadcrumbs.service';

@Component({
    selector: 'vc-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: [ './breadcrumbs.component.scss' ]
})
export class BreadcrumbsComponent {
    public breadcrumbs: Breadcrumbs;

    constructor(private service: BreadcrumbsService) {
        this.service.breadcrumbs.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs);
    }

}
