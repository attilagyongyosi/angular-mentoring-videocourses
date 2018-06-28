import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'vc-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: [ './search-bar.component.scss' ]
})
export class SearchBarComponent {
    @Input()
    public placeholder: string;

    @Output()
    public onSearch = new EventEmitter<string>();

    public searchTerm = '';

    public emitSearch() {
        this.onSearch.emit(this.searchTerm);
    }
}
