import { Component } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';

@Component({
    selector: 'vc-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: [ './action-bar.component.scss' ]
})
export class ActionBarComponent {
    constructor(private searchService: SearchService) {}

    public emitSearch(term: string) {
        this.searchService.search(term);
    }

}
