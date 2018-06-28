import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'vc-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: [ './search-bar.component.scss' ]
})
export class SearchBarComponent {
    public searchTerm = '';

    @Output()
    public onSearch = new EventEmitter<string>();

    public emitSearch() {
        this.onSearch.emit(this.searchTerm);
    }
}
