import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService {
    public searchEvent$ = new Subject<string>();

    public search(term: string) {
        this.searchEvent$.next(term);
    }
}
