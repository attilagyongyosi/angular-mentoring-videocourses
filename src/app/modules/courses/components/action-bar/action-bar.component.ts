import { Component } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';
import { Router } from '@angular/router';

@Component({
    selector: 'vc-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: [ './action-bar.component.scss' ]
})
export class ActionBarComponent {
    constructor(private router: Router,
                private searchService: SearchService) {}

    public emitSearch(term: string) {
        this.searchService.search(term);
    }

    public newCourse(): void {
        this.router.navigateByUrl('/courses/new');
    }

}
