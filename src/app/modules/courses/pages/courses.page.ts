import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'vc-courses-page',
    templateUrl: './courses.page.html',
    styleUrls: [ './courses.page.scss' ]
})
export class CoursesPageComponent implements OnInit, OnDestroy {
    public searchTerm = '';

    private searchSubscription: Subscription;

    constructor(private searchService: SearchService) { }

    public ngOnInit(): void {
        this.searchSubscription = this.searchService.searchEvent$.subscribe(term => this.searchTerm = term);
    }

    public ngOnDestroy(): void {
        this.searchSubscription.unsubscribe();
    }
}
