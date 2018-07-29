import { Component, OnInit } from '@angular/core';
import { BreadcrumbModel } from './breadcrumb.model';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'vc-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
    private readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';

    public breadcrumbs: BreadcrumbModel[];

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    public ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            const ROOT: ActivatedRoute = this.activatedRoute.root;
            this.breadcrumbs = this.getBreadcrumbs(ROOT);
            console.log(this.breadcrumbs);
        });
    }

    private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbModel[] = []): BreadcrumbModel[] {
        const children: ActivatedRoute[] = route.children;

        if (children.length === 0) { return breadcrumbs; }

        for (const child of children) {
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            if (!child.snapshot.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }

            const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

            url += `/${routeURL}`;

            const breadcrumb: BreadcrumbModel = {
                label: child.snapshot.data[this.ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);

            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
    }

}
